(()=>{
  const routeLayers=new WeakMap();
  const routeMarkers=new WeakMap();

  function redrawSavedRoute(map){
    if(!window.L||!map)return;
    const markers=(routeMarkers.get(map)||[]).filter(m=>map.hasLayer?.(m)&&m.getLatLng);
    const selected=markers.filter(m=>{
      try{return Number(m.getRadius?.()||0)>=8.5}catch(e){return false}
    }).sort((a,b)=>a.getLatLng().lng-b.getLatLng().lng);
    const old=routeLayers.get(map);
    if(old){try{map.removeLayer(old)}catch(e){} routeLayers.delete(map)}
    if(selected.length<2)return;
    const line=window.L.polyline(selected.map(m=>m.getLatLng()),{color:'#b84f37',weight:5,opacity:.92,lineCap:'round',lineJoin:'round',interactive:false,pane:'overlayPane'}).addTo(map);
    line.bringToBack?.();
    routeLayers.set(map,line);
  }

  function patchLeaflet(){
    const L=window.L;
    if(!L||!L.CircleMarker||L.CircleMarker.prototype.__kandoRoutePatched)return false;
    const proto=L.CircleMarker.prototype;
    const originalOnAdd=proto.onAdd;
    const originalOnRemove=proto.onRemove;
    const originalSetRadius=proto.setRadius;

    proto.onAdd=function(map){
      const r=originalOnAdd.call(this,map);
      const list=routeMarkers.get(map)||[];
      if(!list.includes(this))list.push(this);
      routeMarkers.set(map,list);
      setTimeout(()=>redrawSavedRoute(map),0);
      return r;
    };
    proto.onRemove=function(map){
      const r=originalOnRemove.call(this,map);
      const list=(routeMarkers.get(map)||[]).filter(x=>x!==this);
      routeMarkers.set(map,list);
      setTimeout(()=>redrawSavedRoute(map),0);
      return r;
    };
    proto.setRadius=function(radius){
      const r=originalSetRadius.call(this,radius);
      const map=this._map;
      if(map)setTimeout(()=>redrawSavedRoute(map),0);
      return r;
    };
    proto.__kandoRoutePatched=true;
    return true;
  }

  function syncPlannerState(){
    const root=document.querySelector('#root');
    const result=document.querySelector('#kando-smart-result');
    if(!root||!result)return;
    const active=getComputedStyle(result).display!=='none'&&result.innerHTML.trim().length>0;
    root.classList.toggle('ks-planner-active',active);
  }

  const timer=setInterval(()=>{if(patchLeaflet())clearInterval(timer)},30);
  document.addEventListener('DOMContentLoaded',()=>{
    patchLeaflet();
    new MutationObserver(syncPlannerState).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['style','class']});
    syncPlannerState();
  });
})();
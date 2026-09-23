(()=>{
  const ESRI='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
  function patchLeaflet(){
    if(!window.L||!window.L.tileLayer||window.L.tileLayer.__kandoPatched)return false;
    const original=window.L.tileLayer;
    const patched=function(url,opts){
      if(typeof url==='string'&&(url.includes('openstreetmap.org')||url.includes('cartocdn.com'))){
        return original.call(this,ESRI,{...(opts||{}),maxZoom:19,attribution:'Tiles © Esri | Data © OpenStreetMap contributors'});
      }
      return original.call(this,url,opts);
    };
    Object.assign(patched,original);
    patched.__kandoPatched=true;
    window.L.tileLayer=patched;
    return true;
  }
  function syncPlannerState(){
    const root=document.querySelector('#root');
    const result=document.querySelector('#kando-smart-result');
    if(!root||!result)return;
    const active=getComputedStyle(result).display!=='none'&&result.innerHTML.trim().length>0;
    root.classList.toggle('ks-planner-active',active);
    if(active){
      const map=document.querySelector('#ks-route-map');
      if(map&&map._leaflet_id){
        setTimeout(()=>{try{Object.values(window.L?._leaflet_map_instances||{}).forEach(m=>m.invalidateSize?.())}catch(e){}},80);
      }
    }
  }
  const timer=setInterval(()=>{if(patchLeaflet())clearInterval(timer)},30);
  document.addEventListener('DOMContentLoaded',()=>{
    patchLeaflet();
    new MutationObserver(syncPlannerState).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['style','class']});
    syncPlannerState();
  });
})();
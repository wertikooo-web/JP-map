(()=>{
// MVP mode: AI route planning is available before payments are connected.
// When Stripe is configured, checkout can be re-enabled here without changing the planner.
const qs=new URLSearchParams(location.search),sid=qs.get('session_id');
if(qs.get('paid')==='1'&&sid){
  localStorage.setItem('kando_paid_session',sid);
  history.replaceState({},'',location.pathname);
}
const nativeFetch=window.fetch.bind(window);
window.fetch=(input,init={})=>{
  const url=typeof input==='string'?input:input?.url||'';
  if((url.includes('/api/ai-plan')||url.includes('/.netlify/functions/ai-plan'))&&init.body){
    try{
      const b=JSON.parse(init.body);
      const paidSession=localStorage.getItem('kando_paid_session');
      if(paidSession)b.sessionId=paidSession;
      init={...init,body:JSON.stringify(b)};
    }catch{}
  }
  return nativeFetch(input,init);
};
})();
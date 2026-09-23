export default async(req)=>{
 if(req.method!=='POST')return new Response('Method not allowed',{status:405});
 const key=process.env.STRIPE_SECRET_KEY;if(!key)return Response.json({error:'PAYMENT_NOT_CONFIGURED'},{status:503});
 const origin=new URL(req.url).origin;const p=new URLSearchParams();
 p.set('mode','payment');p.set('success_url',`${origin}/?paid=1&session_id={CHECKOUT_SESSION_ID}`);p.set('cancel_url',`${origin}/?paid=0`);p.set('line_items[0][quantity]','1');p.set('line_items[0][price_data][currency]','eur');p.set('line_items[0][price_data][unit_amount]',process.env.KANDO_AI_ROUTE_PRICE_CENTS||'490');p.set('line_items[0][price_data][product_data][name]','KANDO AI Japan Route');p.set('metadata[product]','kando_ai_route');
 const r=await fetch('https://api.stripe.com/v1/checkout/sessions',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/x-www-form-urlencoded'},body:p});const data=await r.json();if(!r.ok)return Response.json({error:'CHECKOUT_FAILED'},{status:502});return Response.json({url:data.url,id:data.id})
}
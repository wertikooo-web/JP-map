const DESTINATIONS=[
['tokyo','Tokyo'],['kyoto','Kyoto'],['osaka','Osaka'],['nara','Nara'],['hakone','Hakone'],['kawaguchiko','Kawaguchiko'],['nikko','Nikko'],['kamakura','Kamakura & Enoshima'],['kanazawa','Kanazawa'],['takayama','Takayama'],['shirakawa','Shirakawa-go'],['matsumoto','Matsumoto'],['fukui','Fukui'],['koyasan','Koyasan'],['kumano','Kumano Kodo'],['hiroshima','Hiroshima'],['miyajima','Miyajima'],['naoshima','Naoshima'],['iya','Iya Valley'],['matsuyama','Matsuyama'],['beppu','Beppu'],['yufuin','Yufuin'],['aso','Aso'],['kagoshima','Kagoshima'],['yakushima','Yakushima'],['fukuoka','Fukuoka'],['nagasaki','Nagasaki'],['sapporo','Sapporo'],['otaru','Otaru'],['biei','Biei & Furano'],['shiretoko','Shiretoko'],['aomori','Aomori'],['yamadera','Yamadera'],['ginzan','Ginzan Onsen'],['tottori','Tottori'],['ine','Ine'],['kiso','Kiso Valley'],['izumo','Izumo'],['okayama','Okayama & Kurashiki'],['nagoya','Nagoya'],['ise','Ise-Shima'],['amami','Amami Oshima'],['okinawa','Okinawa']
];
const allowed=DESTINATIONS.map(([id,name])=>`${id}: ${name}`).join('\n');
const jsonSchema={type:'object',additionalProperties:false,required:['summary','days','month','interests','route','notes'],properties:{summary:{type:'string'},days:{type:'integer'},month:{type:['integer','null']},interests:{type:'array',items:{type:'string'}},route:{type:'array',items:{type:'object',additionalProperties:false,required:['id','nights','reason'],properties:{id:{type:'string'},nights:{type:'integer'},reason:{type:'string'}}}},notes:{type:'array',items:{type:'string'}}}};
export default async(req)=>{
 if(req.method!=='POST')return new Response('Method not allowed',{status:405});
 const key=process.env.OPENAI_API_KEY;
 if(!key)return Response.json({error:'AI_NOT_CONFIGURED'},{status:503});
 let body;try{body=await req.json()}catch{return Response.json({error:'BAD_JSON'},{status:400})}
 const prompt=String(body?.prompt||'').slice(0,4000);const lang=body?.lang==='en'?'English':'Russian';
 if(!prompt.trim())return Response.json({error:'EMPTY_PROMPT'},{status:400});
 const system=`You are KANDO Japan Route Planner. Convert a traveler's free-form request into a practical Japan itinerary. Use ONLY destination IDs from the allowed catalog. Respect explicit constraints: total days, max/min days in a city, season/month, mountains/sea/onsen/culture/food, first-time vs repeat visitor, low-tourist preference, no-car requests, start/end cities. Prefer geographic coherence and fewer long transfers. Do not invent exact timetables or fares. Route should normally use 3-8 bases. Allocate nights so the route fits the requested trip duration; day trips can be represented by a nearby base instead of extra hotel changes. Answer in ${lang}. Allowed destinations:\n${allowed}`;
 try{
  const r=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{'Authorization':`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.OPENAI_MODEL||'gpt-5.6-luna',instructions:system,input:prompt,text:{format:{type:'json_schema',name:'kando_route',strict:true,schema:jsonSchema}},reasoning:{effort:'low'},max_output_tokens:1800})});
  if(!r.ok){const e=await r.text();console.error('OpenAI',r.status,e);return Response.json({error:'AI_UPSTREAM'},{status:502})}
  const data=await r.json();const text=data.output_text||data.output?.flatMap(x=>x.content||[]).find(x=>x.type==='output_text')?.text;
  if(!text)return Response.json({error:'AI_EMPTY'},{status:502});
  const plan=JSON.parse(text);const ids=new Set(DESTINATIONS.map(x=>x[0]));plan.route=(plan.route||[]).filter(x=>ids.has(x.id)).slice(0,10);return Response.json(plan,{headers:{'Cache-Control':'no-store'}})
 }catch(e){console.error(e);return Response.json({error:'AI_FAILED'},{status:500})}
}
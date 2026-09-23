export default async (req) => {
  const place = new URL(req.url).searchParams.get('place') || '';
  if (!place.trim()) return new Response(JSON.stringify({error:'place required'}), {status:400});
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) return new Response(JSON.stringify({error:'photo service unavailable'}), {status:503});
  const endpoint = 'https://api.unsplash.com/search/photos?per_page=1&orientation=landscape&query=' + encodeURIComponent(place + ' Japan');
  const response = await fetch(endpoint, {headers:{Authorization:'Client-ID ' + key}});
  if (!response.ok) return new Response(JSON.stringify({error:'photo lookup failed'}), {status:502});
  const data = await response.json();
  const photo = data.results && data.results[0];
  if (!photo) return new Response(JSON.stringify({error:'photo not found'}), {status:404});
  return new Response(JSON.stringify({url:photo.urls.regular,alt:photo.alt_description || place,photographer:photo.user.name,photographerUrl:photo.user.links.html,sourceUrl:photo.links.html}), {headers:{'Content-Type':'application/json','Cache-Control':'public, max-age=86400'}});
};
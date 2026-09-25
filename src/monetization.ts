(() => {
  // MVP mode: AI planning is available before payments are connected.
  // This compatibility layer also routes the old Netlify function URL to Cloudflare Pages Functions.
  const qs = new URLSearchParams(location.search);
  const sid = qs.get('session_id');
  if (qs.get('paid') === '1' && sid) {
    localStorage.setItem('kando_paid_session', sid);
    history.replaceState({}, '', location.pathname);
  }
  const nativeFetch = window.fetch.bind(window);
  window.fetch = (input: RequestInfo | URL, init: RequestInit = {}) => {
    let url = typeof input === 'string' ? input : (input as Request)?.url || '';
    const isAi = url.includes('/.netlify/functions/ai-plan') || url.includes('/api/ai-plan');
    if (isAi) {
      if (url.includes('/.netlify/functions/ai-plan')) input = '/api/ai-plan';
      if (init.body) {
        try {
          const b = JSON.parse(init.body as string);
          const paidSession = localStorage.getItem('kando_paid_session');
          if (paidSession) b.sessionId = paidSession;
          init = { ...init, body: JSON.stringify(b) };
        } catch {}
      }
    }
    return nativeFetch(input, init);
  };
})();

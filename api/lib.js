const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

function requestOrigin(req) {
  return String(req.headers?.origin || req.headers?.Origin || '');
}

function allowOrigin(req) {
  const origin = requestOrigin(req);
  if (!origin) return '';
  if (ALLOWED_ORIGINS.includes(origin)) return origin;
  if (/^https:\/\/[a-z0-9-]+\.azurestaticapps\.net$/i.test(origin)) return origin;
  if (/^http:\/\/(127\.0\.0\.1|localhost):4321$/i.test(origin)) return origin;
  return '';
}

function cors(req, status, body) {
  const origin = allowOrigin(req);
  const headers = {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Headers': 'Content-Type, X-CMS-Password',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Max-Age': '600',
  };
  if (origin) headers['Access-Control-Allow-Origin'] = origin;
  return {
    status,
    headers,
    body: body ? JSON.stringify(body) : '',
  };
}

function json(req, status, body) {
  return cors(req, status, body);
}

function readBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

function clientIp(req) {
  const fwd = String(req.headers?.['x-forwarded-for'] || '');
  return (fwd.split(',')[0] || req.headers?.['x-client-ip'] || 'unknown').trim();
}

module.exports = { cors, json, readBody, allowOrigin, clientIp };

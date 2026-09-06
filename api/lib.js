function cors(status, body) {
  return {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, X-CMS-Password',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : '',
  };
}

function json(status, body) {
  return cors(status, body);
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

module.exports = { cors, json, readBody };

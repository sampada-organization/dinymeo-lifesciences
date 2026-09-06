#!/usr/bin/env node
import http from 'node:http';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const enquiry = require('../api/enquiry/index.js');
const cms = require('../api/cms/index.js');

const PORT = Number(process.env.API_PORT || 8788);

function invoke(handler, req, res, url) {
  const chunks = [];
  req.on('data', (c) => chunks.push(c));
  req.on('end', async () => {
    const raw = Buffer.concat(chunks).toString('utf8');
    let body = {};
    try {
      body = raw ? JSON.parse(raw) : {};
    } catch {
      body = {};
    }
    const azReq = {
      method: req.method,
      headers: req.headers,
      body,
      rawBody: raw,
      url: url.pathname,
    };
    const context = { res: {}, log: console.log };
    await handler(context, azReq);
    const out = context.res || {};
    res.writeHead(out.status || 200, out.headers || { 'Content-Type': 'application/json' });
    res.end(typeof out.body === 'string' ? out.body : JSON.stringify(out.body ?? {}));
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  if (url.pathname === '/api/enquiry' || url.pathname === '/enquiry') {
    invoke(enquiry, req, res, url);
    return;
  }
  if (url.pathname === '/api/cms' || url.pathname === '/cms') {
    invoke(cms, req, res, url);
    return;
  }
  if (url.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }
  res.writeHead(404);
  res.end('not found');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Dinymeo API on http://127.0.0.1:${PORT}`);
});

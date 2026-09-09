import { describe, expect, it } from 'vitest';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

function invoke(handler: Function, req: object) {
  const context: { res?: unknown; log: { warn: () => void } } = { log: { warn: () => {} } };
  return Promise.resolve(handler(context, req)).then(() => context.res as { status: number; body: string; headers: Record<string, string> });
}

describe('enquiry API', () => {
  it('rejects missing fields and does not use wildcard CORS', async () => {
    const handler = require('../../api/enquiry/index.js');
    const res = await invoke(handler, {
      method: 'POST',
      headers: { origin: 'https://evil.example' },
      body: { email: 'a@b.co', phone: '7775000425', company: 'X', message: 'hi' },
    });
    expect(res.status).toBe(400);
    expect(res.headers['Access-Control-Allow-Origin']).toBeUndefined();
  });

  it('stores locally when not on Azure', async () => {
    const handler = require('../../api/enquiry/index.js');
    const res = await invoke(handler, {
      method: 'POST',
      headers: { origin: 'http://127.0.0.1:4321' },
      body: {
        name: 'Test User',
        email: 'partner@example.com',
        phone: '7775000425',
        company: 'Acme Pharma',
        message: 'Need a quote for blister packs',
        lang: 'en',
      },
    });
    expect(res.status).toBe(202);
    expect(JSON.parse(res.body).stored).toBe('local');
    expect(res.headers['Access-Control-Allow-Origin']).toBe('http://127.0.0.1:4321');
  });
});

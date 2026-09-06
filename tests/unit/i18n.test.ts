import { describe, expect, it } from 'vitest';
import { copy, locales, type Locale } from '../../src/lib/i18n';
import { localePath, switchLocale, withBase } from '../../src/lib/paths';

function keysOf(value: unknown, prefix = ''): string[] {
  if (value === null || typeof value !== 'object') return [prefix];
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => keysOf(item, `${prefix}[${i}]`));
  }
  return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
    keysOf(v, prefix ? `${prefix}.${k}` : k),
  );
}

describe('i18n parity', () => {
  const enKeys = keysOf(copy.en).sort();
  for (const lang of locales) {
    it(`${lang} has the same keys as en`, () => {
      expect(keysOf(copy[lang as Locale]).sort()).toEqual(enKeys);
    });
  }
});

describe('paths', () => {
  it('english stays at root', () => {
    expect(localePath('en', '/about')).toBe('/about');
    expect(localePath('en', '/')).toBe('/');
  });
  it('hindi and marathi are prefixed', () => {
    expect(localePath('hi', '/about')).toBe('/hi/about');
    expect(localePath('mr', '/')).toBe('/mr/');
  });
  it('switchLocale strips and reapplies prefix', () => {
    expect(switchLocale('en', 'hi', '/about')).toBe('/hi/about');
    expect(switchLocale('hi', 'mr', '/hi/contact')).toBe('/mr/contact');
    expect(switchLocale('mr', 'en', '/mr/')).toBe('/');
  });
  it('withBase joins a non-root base', () => {
    expect(withBase('/media/x.jpg')).toMatch(/media\/x\.jpg$/);
  });
});

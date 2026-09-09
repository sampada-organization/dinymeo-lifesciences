import { describe, expect, it } from 'vitest';
import { copy, locales, type Locale } from '../../src/lib/i18n';
import { localePath, switchLocale, withBase, unprefixedPath } from '../../src/lib/paths';
import products from '../../src/content/products.json';
import slides from '../../src/content/slides.json';

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

  it('uses formulation, not recipe', () => {
    const blob = JSON.stringify(copy);
    expect(blob.toLowerCase()).not.toMatch(/recipe/);
    expect(blob).not.toMatch(/रेसिपी/);
  });
});

describe('paths', () => {
  it('english stays at root', () => {
    expect(localePath('en', '/about')).toBe('/about');
    expect(localePath('en', '/')).toBe('/');
  });
  it('hindi is prefixed', () => {
    expect(localePath('hi', '/about')).toBe('/hi/about');
  });
  it('switchLocale strips and reapplies prefix', () => {
    expect(switchLocale('en', 'hi', '/about')).toBe('/hi/about');
    expect(switchLocale('hi', 'en', '/hi/contact')).toBe('/contact');
  });
  it('withBase joins a non-root base', () => {
    expect(withBase('/media/x.jpg')).toMatch(/media\/x\.jpg$/);
  });
  it('unprefixedPath strips base and locale', () => {
    expect(unprefixedPath('/dinymeo-lifesciences/hi/about', '/dinymeo-lifesciences/')).toBe(
      '/about',
    );
    expect(unprefixedPath('/about', '/')).toBe('/about');
  });
});

describe('packaging catalogue', () => {
  it('lists five packing standards including tubes', () => {
    expect(products.packaging).toHaveLength(5);
    expect(products.packaging.map((p) => p.id)).toEqual([
      'alu-alu',
      'blister',
      'strip',
      'bottle',
      'tube',
    ]);
    expect(products.packaging.every((p) => p.image.startsWith('/media/pack-'))).toBe(true);
    const blob = JSON.stringify(products);
    expect(blob.toLowerCase()).not.toMatch(/recipe/);
    expect(blob).not.toMatch(/रेसिपी/);
  });
});

describe('flyer images', () => {
  it('gives every slide its own background file', () => {
    const imgs = slides.items.map((s) => s.image);
    expect(imgs).toHaveLength(4);
    expect(new Set(imgs).size).toBe(4);
    expect(imgs.every((src) => src.startsWith('/media/flyer-'))).toBe(true);
  });
});

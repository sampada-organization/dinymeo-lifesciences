import { type Locale } from './i18n';

export function withBase(path = '/'): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalised = path.startsWith('/') ? path : `/${path}`;
  if (base === '/') return normalised;
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  if (normalised === '/') return `${trimmedBase}/`;
  return `${trimmedBase}${normalised}`;
}

export function localePath(lang: Locale, path = '/'): string {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return withBase(clean || '/');
  if (!clean) return withBase(`/${lang}/`);
  return withBase(`/${lang}${clean}`);
}

export function switchLocale(current: Locale, next: Locale, pathname: string, base = '/'): string {
  let rest = pathname;
  if (base !== '/' && rest.startsWith(base.replace(/\/$/, ''))) {
    rest = rest.slice(base.replace(/\/$/, '').length) || '/';
  }
  rest = rest.replace(/^\/(hi|mr)(?=\/|$)/, '') || '/';
  if (!rest.startsWith('/')) rest = `/${rest}`;
  return localePath(next, rest);
}

export function asset(path: string): string {
  return withBase(path);
}

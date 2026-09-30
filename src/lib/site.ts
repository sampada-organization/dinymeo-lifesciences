import site from '../content/site.json';
import products from '../content/products.json';
import slides from '../content/slides.json';
import { type Locale } from './i18n';

export type Site = typeof site;
export type Products = typeof products;
export type Slides = typeof slides;

export const siteData: Site = site;
export const productData: Products = products;
export const slideData: Slides = slides;

export function whatsappUrl(text?: string): string {
  const message =
    text ?? 'Hello, I would like to enquire about manufacturing with Dinymeo Lifesciences.';
  return `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telUrl(): string {
  return `tel:${siteData.phoneTel}`;
}

export function mailUrl(subject?: string, body?: string): string {
  const q = new URLSearchParams();
  if (subject) q.set('subject', subject);
  if (body) q.set('body', body);
  const s = q.toString();
  return `mailto:${siteData.email}${s ? `?${s}` : ''}`;
}

function placeQuery(): string {
  return `${siteData.legalName}, ${siteData.address.lines.join(', ')}`;
}

export function mapsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeQuery())}`;
}

export function googleBusinessUrl(): string {
  return mapsUrl();
}

export function googleMapEmbedUrl(): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(placeQuery())}&z=16&hl=en&output=embed`;
}

export function hours(lang: Locale): string {
  return siteData.hours[lang];
}

export function qualityNote(lang: Locale): string {
  return siteData.qualityNote[lang];
}

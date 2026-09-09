import { expect, test } from '@playwright/test';

test.describe('Dinymeo MVP', () => {
  test('home renders headline, nav, and legal claim', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Dinymeo/i);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const menu = page.getByRole('button', { name: 'Menu' });
    if (await menu.isVisible()) await menu.click();
    await expect(page.getByRole('navigation', { name: 'Primary' })).toContainText('About');
    await expect(page.locator('.site-footer')).toContainText(/WHO-GMP/);
    await expect(page.locator('.hero')).not.toContainText(/WHO-GMP/);
    await expect(page.locator('body')).not.toContainText(/self-medication/i);
    await expect(page.getByRole('link', { name: /Call Dinymeo/i })).toHaveAttribute(
      'href',
      'tel:+917775000425',
    );
    await expect(page.getByRole('link', { name: /WhatsApp Dinymeo/i })).toHaveAttribute(
      'href',
      /wa\.me\/917775000425/,
    );
  });

  test('language switcher is not shown', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Language' })).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'HI', exact: true })).toHaveCount(0);
  });

  test('inner pages and legal docs', async ({ page }) => {
    for (const path of ['/about', '/manufacturing', '/contact', '/legal/disclaimer', '/legal/privacy', '/legal/terms']) {
      const res = await page.goto(path);
      expect(res?.ok()).toBeTruthy();
      await expect(page.locator('h1')).toBeVisible();
    }
    await page.goto('/about');
    await expect(page.locator('h1')).not.toContainText(/Made in India/i);
    await expect(page.locator('main')).not.toContainText(/small or large/i);
  });

  test('enquiry form requires consent and has five fields', async ({ page }) => {
    await page.goto('/contact');
    const form = page.locator('form.enquiry');
    await expect(form.getByRole('textbox', { name: 'Name', exact: true })).toBeVisible();
    await expect(form.getByRole('textbox', { name: 'Email' })).toBeVisible();
    await expect(form.getByRole('textbox', { name: 'Phone' })).toBeVisible();
    await expect(form.getByRole('textbox', { name: 'Company name' })).toBeVisible();
    await expect(form.getByRole('textbox', { name: 'Message' })).toBeVisible();
    await form.getByRole('button', { name: /Send enquiry/i }).click();
    await expect(form.locator(':invalid')).not.toHaveCount(0);
  });

  test('admin page is reachable', async ({ page }) => {
    const res = await page.goto('/admin');
    expect(res?.ok()).toBeTruthy();
    await expect(page.getByRole('heading', { name: /Edit the live copy/i })).toBeVisible();
  });

  test('animated svg logo is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('svg.logo').first()).toBeVisible();
    await expect(page.locator('svg.ratio')).toBeVisible();
  });

  test('header and footer share the full-colour mark', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.site-header svg.logo.mark')).toBeVisible();
    await expect(page.locator('.site-footer svg.logo.mark')).toBeVisible();
    await expect(page.locator('.site-footer svg.logo.invert')).toHaveCount(0);
    await expect(page.locator('.site-footer .logo-plate')).toBeVisible();
  });

  test('manufacturing lists tubes as a packing standard', async ({ page }) => {
    await page.goto('/manufacturing');
    await expect(page.getByRole('heading', { name: 'Tubes', exact: true })).toBeVisible();
    await expect(page.locator('.pack-hero img')).toBeVisible();
    await expect(page.locator('body')).not.toContainText(/recipe/i);
  });

  test('hero has hold-to-pause controls and a pack-science mindmap', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Previous slide' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next slide' })).toBeVisible();
    await expect(page.locator('.hero-hold')).toContainText(/Hold to pause/i);
    await expect(page.locator('.hero-slide.is-active svg.overview-map')).toBeVisible();
    await expect(page.locator('.overview-map')).toContainText('Dinymeo');
    await expect(page.locator('body')).not.toContainText(/research-led/i);
    await expect(page.locator('body')).toContainText(/premium pharmaceutical company in India/i);
    await page.getByRole('button', { name: 'Next slide' }).click();
    await expect(page.locator('[data-title]')).toContainText(/science of healing/i);
    await page.getByRole('button', { name: 'Next slide' }).click();
    await expect(page.locator('[data-title]')).toContainText(/Packs that protect/i);
    await expect(page.locator('.hero-slide.is-active svg.pack-mindmap')).toBeVisible();
    await expect(page.locator('.pack-mindmap')).toContainText('ICH Q1A');
    await page.getByRole('button', { name: 'Next slide' }).click();
    await expect(page.locator('[data-title]')).toContainText(/worldwide/i);
  });
});

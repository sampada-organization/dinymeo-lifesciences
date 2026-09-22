import { expect, test } from '@playwright/test';

test.describe('Dinymeo MVP', () => {
  test('home renders headline, nav, and legal claim', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Dinymeo/i);
    await expect(page.locator('main').getByRole('heading', { level: 1 })).toBeVisible();
    const menu = page.getByRole('banner').getByRole('button', { name: 'Menu' });
    if (await menu.isVisible()) await menu.click();
    await expect(page.getByRole('navigation', { name: 'Primary' })).toContainText('About');
    await expect(
      page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Contact' }),
    ).toHaveCount(0);
    await expect(page.locator('.site-header a.btn.quote').locator('visible=true')).toHaveCount(1);
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
      await expect(page.locator('main h1')).toBeVisible();
    }
    await page.goto('/about');
    await expect(page.locator('main h1')).not.toContainText(/Made in India/i);
    await expect(page.locator('main')).not.toContainText(/small or large/i);
  });

  test('enquiry form has five fields', async ({ page }) => {
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
    await expect(page.getByRole('heading', { name: 'The lines', exact: true })).toBeVisible();
    await expect(page.locator('.plant-card')).toHaveCount(6);
    await expect(page.getByRole('heading', { name: 'Diabetology', exact: true })).toBeVisible();
    await expect(page.locator('.dose-table')).toContainText('Cardiovascular');
    await expect(page.locator('body')).not.toContainText(/Hypertension/i);
    await expect(page.getByRole('heading', { name: 'Tubes', exact: true })).toBeVisible();
    await expect(page.locator('.pack-hero img')).toBeVisible();
    await expect(page.locator('.pack-hero img')).toHaveAttribute('src', /pack-hero/);
    await expect(page.locator('.pack-card img')).toHaveCount(5);
    await expect(page.locator('body')).not.toContainText(/recipe/i);
    await expect(page.locator('body')).not.toContainText(/no consumer doses/i);
  });

  test('the page scrolls normally and has no section map', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.page-flow')).toHaveCount(0);
    const start = await page.evaluate(() => window.scrollY);
    await page.mouse.wheel(0, 900);
    await expect.poll(async () => page.evaluate(() => window.scrollY)).toBeGreaterThan(start + 80);
    await expect(page.locator('body')).not.toContainText('On this page');
  });

  test('hero cycles the corporate slides and the home page states the portfolio', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Dinymeo Lifesciences/);
    await expect(page.locator('meta[name="keywords"]')).toHaveAttribute('content', /Dinymeo Lifesciences/);
    await expect(page.locator('meta[name="keywords"]')).not.toHaveAttribute('content', /contract manufacturing/i);
    await expect(page.locator('meta[name="description"]')).not.toHaveAttribute('content', /contract manufacturing/i);
    await expect(page.getByRole('button', { name: 'Previous slide' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next slide' })).toBeVisible();
    await expect(page.locator('.hero-hold')).toContainText(/Hold to pause/i);
    await expect(page.locator('.hero')).not.toContainText(/WHO-GMP/);
    await expect(page.locator('[data-title]')).toContainText(/Innovating healthcare/i);
    await expect(page.locator('.hero-slide.is-active img')).toHaveAttribute('src', /line-hall/);
    await expect(page.locator('.stats')).toContainText('500+');
    await expect(page.locator('.plant-card')).toHaveCount(3);
    await expect(page.locator('svg.flow-scene')).toBeVisible();
    await expect(page.locator('.flow-scene')).toContainText('Formulation');
    await expect(page.locator('body')).not.toContainText(/research-led/i);
    await expect(page.locator('body')).not.toContainText(/premier/i);
    await expect(page.locator('body')).not.toContainText(/million units/i);
    await expect(page.getByRole('heading', { name: 'Who we work with' })).toBeVisible();
    await page.locator('.hero-nav.next').click({ force: true });
    await expect(page.locator('[data-title]')).toContainText(/Lines built for the dose/i);
    await expect(page.locator('.hero-slide.is-active img')).toHaveAttribute('src', /line-tablet/);
    await page.locator('.hero-nav.next').click({ force: true });
    await expect(page.locator('[data-title]')).toContainText(/Purity, checked in the lab/i);
    await expect(page.locator('.hero-slide.is-active img')).toHaveAttribute('src', /line-hplc/);
    await page.locator('.hero-nav.next').click({ force: true });
    await expect(page.locator('[data-title]')).toContainText(/Sealed for the journey/i);
    await expect(page.locator('.hero-slide.is-active img')).toHaveAttribute('src', /line-blister/);
  });
});

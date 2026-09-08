import { expect, test } from '@playwright/test';

test.describe('Dinymeo MVP', () => {
  test('home renders headline, nav, and legal claim', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Dinymeo/i);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const menu = page.getByRole('button', { name: 'Menu' });
    if (await menu.isVisible()) await menu.click();
    await expect(page.getByRole('navigation', { name: 'Primary' })).toContainText('About');
    await expect(page.locator('body')).toContainText(/WHO-GMP/);
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
});

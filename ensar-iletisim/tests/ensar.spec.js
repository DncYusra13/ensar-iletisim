import { test, expect } from '@playwright/test';

test('Ensar İletişim canlı site kontrolü', async ({ page }) => {
  await page.goto('https://dncyusra13.github.io/ensar-iletisim/');
  await expect(page.getByText('Profesyonel Teknik Servis')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Fiyat Hesapla' })).toBeVisible();
});
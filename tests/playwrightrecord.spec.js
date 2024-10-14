import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('babu25');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Welcome1234!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('.card > a').first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByLabel('Total:').click();
  await page.getByLabel('Total:').fill('abcs');
  await page.getByLabel('Country:').click();
  await page.getByLabel('Country:').fill('india');
  await page.getByLabel('City:').click();
  await page.getByLabel('City:').fill('bengaluru');
  await page.getByLabel('Credit card:').click();
  await page.getByLabel('Credit card:').fill('12345');
  await page.getByLabel('Month:').click();
  await page.getByLabel('Month:').fill('12');
  await page.getByLabel('Year:').click();
  await page.getByLabel('Year:').fill('2025');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.locator('.sa-placeholder')).toBeVisible();
  await expect(page.locator('body')).toContainText('Thank you for your purchase!');
  await page.getByRole('button', { name: 'OK' }).click();
  
});
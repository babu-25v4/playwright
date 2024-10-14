import { test, expect } from '@playwright/test';

test('RI login test', async ({ page }) => {
  await page.goto('https://interact.qa1.responsys.net/authentication/login/LoginPage');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('progtm');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome1234%');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://interact.qa1.responsys.net/suite/c#!home');
  await expect(page.locator('#uifresponsysheaderaccountbutton-2075')).toBeVisible();
  await page.locator('#uifresponsysheaderaccountbutton-2075').click();

  await page.close();

});
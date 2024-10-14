import { test as baseTest,expect } from '@playwright/test';

// Define a custom fixture using test.extend()
export const test = baseTest.extend({
  // Define the fixture that creates a logged-in page
  loggedInPage: async ({ page }, use) => {
    // Set up a logged-in page
    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveTitle('STORE')
    await page.waitForTimeout(1000)
    await page.locator('[id="login2"]').click();
    await page.locator('id=loginusername').fill('Marcus')
    await page.locator('[id="loginpassword"]').fill('m@rs')//using object property
    await page.getByRole('button', { name: 'Log in' }).click()

    // Use the logged-in page in tests
    await use(page);
  },
});
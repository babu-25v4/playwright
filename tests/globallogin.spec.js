import { test, expect } from '@playwright/test';
import playwrightConfig from '../playwright.config';

test('Global login tests', async ({ page }) => {

    try{
        await page.goto('/');
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.locator('#loginusername').click();
        await page.locator('#loginusername').fill('Marcus');
        await page.locator('#loginpassword').click();
        await page.locator('#loginpassword').fill('m@rs');
        await page.getByRole('button', { name: 'Log in' }).click();

    } catch (error) {
        if (error instanceof playwright.errors.TimeoutError)
            console.log('Timeout!');
    }


});

// command to run -  npx playwright test ./tests/globallogin.spec.js --project
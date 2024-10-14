import { test, expect } from '@playwright/test';
const playwright = require('playwright');

test('Auto login to bookstore', async ({ page }) => {

    try {
        // environment variables which are set in globalSetup are only available inside test().
        await page.goto('/bookstore/login');
        await page.locator('[id="input-vaadin-text-field-16"]').fill('admin')
        await page.locator('[id="input-vaadin-password-field-17"]').fill('admin')
        await page.locator('[id="submitBtn"]').click()
        timeout: 100
        // You are signed in!        
        console.log(await page.title())
        const element = page.locator('[id="welcomeMessage"]');
        await expect(element).toHaveText('Welcome Mike!');
        await page.waitForSelector('//vaadin-icon[@icon="vaadin:sign-out"]',{ timeout: 5000 })
        await page.locator('//vaadin-icon[@icon="vaadin:sign-out"]').click()
    }
    catch (error) {
        if (error instanceof playwright.errors.TimeoutError)
            console.log('Timeout!');
    }
})
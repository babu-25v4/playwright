import { test, expect } from '@playwright/test';

test.describe('isolation tests', () => {

    test('isolation', async ({ page }) => {

        await page.goto('https://demo.jmix.io/bookstore/login');
       
        await page.locator('[id="input-vaadin-text-field-16"]').fill('admin')  
        await page.locator('[id="input-vaadin-password-field-17"]').fill('admin')    
        await page.locator('[id="submitBtn"]').click();
        // welcomeMessage
  
    });

    test('isolation1', async ({ page }) => {

        await page.goto('https://demo.jmix.io/bookstore/login');
       
        await page.locator('[id="input-vaadin-text-field-16"]').fill('admin')  
        await page.locator('[id="input-vaadin-password-field-17"]').fill('admin')    
        await page.locator('[id="submitBtn"]').click();
  
    });


});

// npx playwright test ./tests/isolation.spec.js --project firefox  --headed --workers=1
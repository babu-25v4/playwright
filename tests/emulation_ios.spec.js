import { test, chromium } from '@playwright/test';

test('emulating on ios device', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');
    await page.screenshot({path: 'ios-device-screenshot.png'});
    await page.waitForTimeout(5000);
    await browser.close();

});

// command to run - npx playwright test ./tests/emulation_ios.spec.js     
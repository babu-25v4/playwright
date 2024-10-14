import { test, chromium } from '@playwright/test';

test('emulating a pixel 5 device', async () => {


const browser = await chromium.launch()

const context = await browser.newContext()

const page = await context.newPage();

await page.goto('https://google.com');

await page.screenshot({path: 'mobile-screenshot.png'})

await browser.close()


});
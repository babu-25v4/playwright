import { test, expect } from '@playwright/test';
import path from 'path';
//Implement trace view with hooks
let context;
let page;
test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    await context.tracing.start(
        {
            snapshots: true,
            screenshots: true
        });
    page = await context.newPage();
})

test.afterAll(async () => {
    await context.tracing.stop({ path: 'trace_result.zip' })
})

test('googleimage', async () => {
    await page.goto('https://www.google.com/');
    await page.getByLabel('Search for Images').click();
    await page.getByLabel('Search', { exact: true }).fill('skylark');
    await page.getByLabel('Google Search').click();
    await expect(page).toHaveTitle('skylark - Google Search')
    await page.goto('https://www.google.com/');
});
test('skylark', async () => {
    await page.goto('https://www.google.com/');
    await page.locator('id=APjFqb').fill('Skylark')
    await page.getByRole('button', { name: 'Google Search' }).click();
    // let bird_detail = await page.getByText('The Eurasian skylark is a').textContent()
    let bird_detail = await page.locator('//div[@class="kno-rdesc"]').textContent()
    print(bird_detail);
});
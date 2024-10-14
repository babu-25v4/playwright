import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=>{
    await page.goto('http://omayo.blogspot.com/');
});

test('handling frames', async ({ page }) => {
    test.slow()
    await page.evaluate(() => {
        window.scrollBy(0, 1500); // Scroll down by the height of the viewport
    });
    // Wait for some time to observe the scrolling effect (optional)
    //await page.waitForSelector('iframe2', { 
 if (frameElementHandle) {
        // Wait for the tab selector Omayo to be available in the iframe
        const tabSelector = '#PageList1 > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)';        // Replace with the actual tab selector within the iframe
        await frameElementHandle.waitForSelector(tabSelector, { visible: true });
        await frameElementHandle.click(tabSelector);
        const pageheader = frameElementHandle.locator('#h1.title')
        if (pageheader.isVisible())
        {
            const headerSelector = 'h1'; // Replace with the actual selector of the header
            const headerText = await page.$eval(headerSelector, element => element.innerText);
            console.log(headerText)
        }
    }
    const mainFrame = page.mainFrame();
    await mainFrame.locator('h2');
    const homeTitle = await mainFrame.title();
    console.log(homeTitle)
    expect(homeTitle).toBe('omayo (QAFox.com)');



});


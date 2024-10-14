import { test, expect } from '@playwright/test';

test('locators', async ({ page }) => {

    await page.goto('file:///C:/Users/adminuser/Desktop/playwright/tests/htmlpages/Hotelbooking.html');

    const title = await page.locator('title').innerText()
    console.log(title)
    await page.locator('#txtFirstName').fill('abc1234');
    await page.locator('#txtLastName').fill('xyz1234');
    await page.locator('#txtEmail').fill('abc.xyz@gmail.com');
    await page.locator('#txtPhone').fill('9612345');
    
   
    await page.getByRole('button', { value: 'Confirm Booking' }).click();

});

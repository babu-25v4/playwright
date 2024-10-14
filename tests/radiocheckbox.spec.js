import { test, expect } from '@playwright/test';

test('radiocheckbox', async ({ page }) => {

    await page.goto('https://demo.opencart.com');
    const fpath = "C:\Users\adminuser\Downloads\clock.png";
    const path = require('path');

    const title = await page.locator('title').innerText()
    console.log(title)
    await page.waitForTimeout(2000)

    await page.getByRole('link', {name:"Apple Cinema 30\""}).first().click();
    
    await page.locator('#input-option-value-6').click();
    await page.locator('#input-option-value-8').click();
    await page.locator('#input-option-value-10').click();
    await page.locator('input[placeholder="Text"][value="test"]').fill('bbcc');
    await page.locator('select[class="form-select"]').selectOption('2')
    await page.locator('select[class="form-select"]').selectOption({index:3})
    await page.locator('textarea[placeholder="Textarea"]').fill('text for text area...')

    await page.click('#button-upload-222');
    const filePath = path.join(__dirname+"\\htmlpages\\", "clock.png");
      
    await page.waitForTimeout(5000)
    await page.setInputFiles('#button-upload-222', filePath);


    // await page.waitForTimeout(5000)
    await browser.close();
   
  

});
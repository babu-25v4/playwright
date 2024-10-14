import { test, expect } from '@playwright/test';
import fs from 'fs'
import { parse } from 'csv-parse/sync';
const records = parse(fs.readFileSync('testdata/data.csv'), {
  columns: true,
  skip_empty_lines: true
});
let size = records.length

test('login_bookstore',
  async ({ page }) => {
     test.slow()//marks the test as slow and triples the test timeout.
    //await test.step('Book Store', async () => {
    for (let count = 0; count < size; count++) {
      await page.goto('https://demo.jmix.io/bookstore/login');
      //await expect(page).toHaveTitle('Login - Jmix Bookstore');
      await page.locator('[id="input-vaadin-text-field-16"]').fill(records[count].username)
      await page.locator('[id="input-vaadin-password-field-17"]').fill(records[count].password)
      await page.locator('[id="submitBtn"]').click()
      await page.waitForTimeout(3000)
      let user_name = await page.locator('[id="userIndicator"]').innerText()
      let user_position = await page.locator('[id="positionLabel"]').innerText()
      await expect(page.locator('[id="positionLabel"]')).toHaveText(records[count].position);
      console.log(user_name + ' is ' + user_position)
      await page.locator('//vaadin-icon[@icon="vaadin:sign-out"]').click()
      await page.waitForTimeout(3000)
    }
  })
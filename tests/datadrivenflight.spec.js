import { test, expect } from '@playwright/test';
import fs from 'fs'
import { parse } from 'csv-parse/sync';
const records = parse(fs.readFileSync('testdata/flightdata.csv'), {
  columns: true,
  skip_empty_lines: true
});
let size = records.length

test('flight_booking',
  async ({ page }) => {
     test.slow()//marks the test as slow and triples the test timeout.
    //await test.step('Book Store', async () => {
    for (let count = 0; count < size; count++) {
      await page.goto('https://blazedemo.com/');
    //   await page.locator('[id="input-vaadin-text-field-16"]').fill(records[count].username)
    //   await page.locator('[id="input-vaadin-password-field-17"]').fill(records[count].password)
      await page.locator('select[name="fromPort"]').selectOption({value:records[count].departure})
      await page.locator('select[name="toPort"]').selectOption({value:records[count].destination})

      await page.locator('[value="Find Flights"]').click()
      await page.waitForTimeout(3000)
      //Flights from Paris to Buenos Aires: 
    //   await expect(page.locator('[id="h3"]')).toHaveText('Flights from'+records[count].departure+''+records[count].destination);

      await page.locator('//table[@class="table"]/tbody//tr[1]/td[1]').click()

      await page.locator('[value="Purchase Flight"]').click()

      await page.waitForTimeout(5000)

      await expect(page.locator('h1')).toContainText('Thank you for your purchase today!');

      await page.goto('https://blazedemo.com/');
    }


})
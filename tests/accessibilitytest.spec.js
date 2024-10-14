import { test,expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default; // 1
test.describe('homepage', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    // await page.goto('https://www.scope.org.uk/'); // 3
   
    await page.goto('https://codeshare.io/Yz6BQE'); // 3
    const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['WCAG 2.0', 'WCAG 2.1', 'BS 8878'])
    .analyze(); // 4
    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});
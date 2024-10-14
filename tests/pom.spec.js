import { test } from '@playwright/test';
import { loginPage } from '../pages/login.js'
import { dashboardPage } from '../pages/dashboard.js';


test('saucelogin', async ({ page }) => {
  const objLogin = new loginPage(page)
  const objDashboard= new dashboardPage(page)

  await objLogin.gotologinPage()
  await objLogin.log_in('standard_user', 'secret_sauce')
  await objDashboard.checkPgHeader()
  await objDashboard.log_out()
  await page.close();
});
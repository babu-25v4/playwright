import { test } from '@playwright/test';
import { loginPage } from '../pages/login.js'
import { dashboardPage } from '../pages/dashboard.js';
import { cartPage } from '../pages/cart.js';
import { checkoutPage } from '../pages/checkout.js';
import { checkoutcompletePage } from '../pages/checkoutcomplete.js';


test('saucelogin', async ({ page }) => {
  const objLogin = new loginPage(page)
  const objDashboard= new dashboardPage(page)
  const objCart = new cartPage(page)
  const objCheckout = new checkoutPage(page)
//   const objCheckoutComplete= new checkoutcompletePage(page)


  await objLogin.gotologinPage()
  await objLogin.log_in('standard_user', 'secret_sauce')
  await objDashboard.checkPgHeader()
//   await objDashboard.log_out()
//   await page.close();

  await objDashboard.addProduct();
  await objDashboard.goToCart();
  
  await objCart.checkOutCart();
  await objCart.fillCustomerInfo("Raj", "Kumar", 560010)
//   await objCart.clickContinueButton();
  
  await objCheckout.clickFinishButton()
  
//   await objCheckoutComplete.v

});


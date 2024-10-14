import { expect } from '@playwright/test';
export class cartPage {

    constructor(page) {
        this.page = page
        this.menu = page.getByRole('button', { name: 'Open Menu' })
        this.logout = page.locator('[data-test="logout-sidebar-link"]')
    }

    async checkOutCart(){

        await this.page.locator('[id="checkout"]').click()
    }

    async setCustomerFirstname(fname){

        await this.page.locator('[id="first-name"]').fill(fname);
    }
    async setCustomerLastname(lname){

        await this.page.locator('[id="last-name"]').fill(lname);
    }
    async setCustomerPostalCode(pCode){

        await this.page.locator('[id="first-name"]').fill(pCode);
    }

    async clickContinueButton(){

        await page.waitForTimeout(2000)
        await this.page.locator('[id="continue"]').click();
    }
    
    async fillCustomerInfo(fname, lname, pcode){

        this.setCustomerFirstname(fname);
        this.setCustomerLastname(lname);
        this.setCustomerPostalCode(pcode);
        this.clickContinueButton();
    }


}
import { expect } from '@playwright/test';
export class checkoutPage {

    constructor(page) {
        this.page = page
        this.menu = page.getByRole('button', { name: 'Open Menu' })
        this.logout = page.locator('[data-test="logout-sidebar-link"]')
    }


    async clickFinishButton(){

        await this.page.locator('[id="finish"]').click();
    }

}
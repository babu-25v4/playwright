import { expect } from '@playwright/test';
export class checkOutCompletePage {

    constructor(page) {
        this.page = page
        this.menu = page.getByRole('button', { name: 'Open Menu' })
        this.logout = page.locator('[data-test="logout-sidebar-link"]')
    }


    async verifyCheckoutStatus(){

        await expect(page.locator('class="title"')).toHaveText('Checkout: Complete!')
    }

    async backToHome(){

        await this.page.locator('[id=" back-to-products"]').click();
    }
   

}
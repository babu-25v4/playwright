import { expect } from '@playwright/test';
export class dashboardPage {

    constructor(page) {
        this.page = page
        this.menu = page.getByRole('button', { name: 'Open Menu' })
        this.pgheader =page.getByText('Products')
        this.logout = page.locator('[data-test="logout-sidebar-link"]')
    }
    
    async checkPgHeader(){
        await expect(await this.pgheader).toBeVisible()
        await expect(await this.pgheader).toHaveText('Products');
        console.log(await this.pgheader.innerText())
        await this.page.screenshot({ path: 'screenshot.png' });
    }

    async addProduct(){

        await this.page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()        
    }

    async goToCart(){

        await this.page.locator('[id="shopping_cart_container"]').click();
    }





    async log_out() {
        await this.menu.click()
        await this.logout.click()
    }



}
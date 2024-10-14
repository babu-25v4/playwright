export class loginPage {

    constructor(page) {
        this.page = page
        this.username = page.locator('[data-test="username"]')
        this.password = page.locator('[data-test="password"]')
        this.login = page.locator('[data-test="login-button"]')
    }

async gotologinPage()
{
    await this.page.goto('https://www.saucedemo.com/');
}

async setUserName(un)
{
    await this.username.fill(un);
}

async setPassWord(pwd)
{
    await this.password.fill(pwd)
}

async clickLogIn()
{
    await this.login.click()
}

async log_in(un,pwd){
await this.setUserName(un)
await this.setPassWord(pwd)
await this.clickLogIn()
}

}

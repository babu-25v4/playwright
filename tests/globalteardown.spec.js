// const playwright = require('playwright');

async function tearDown(config) {
    
    await global.browser.close();
    console.log('Deallocating resources')
}
export default tearDown;
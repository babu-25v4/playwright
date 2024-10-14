import { test, expect } from '@playwright/test';

test.describe('omayo page elements', () => {

    test.skip('demo', async ({ page }) => {

        await page.goto('http://omayo.blogspot.com/');
        page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
                switch (dialog.type()) {
                    case 'alert':
                        await dialog.accept();
                        break;
                    case 'confirm':
                        await dialog.dismiss();
                        break;
                    case 'prompt':
                        await dialog.accept('Harry Pottery');
                        break;
        }
        });
        await page.getByRole('button', { name: 'ClickToGetAlert' }).click();    
        await page.getByRole('button', { name: 'GetPrompt' }).click();    
        await page.getByRole('button', { name: 'GetConfirmation' }).click();
  
    });

    test.only('@fast handling frames', { tag: ['@double-click', '@hover'], }, async ({ page, browser }) => {
        await page.goto('http://omayo.blogspot.com/'); 
        // test.slow()
        test.info().annotations.push({
            type: 'browser version',
            description: browser.version(),
        })

        await page.evaluate(() => {
            window.scrollBy(0, 1500); // Scroll down by the height of the viewport
        });

        // Wait for some time to observe the scrolling effect (optional)
        //await page.waitForSelector('iframe2', { timeout: 1000 }); // Wait for 1 second

        const frameElementHandle = page.frame('iframe2');

        if (frameElementHandle) {
            // Wait for the tab selector Omayo to be available in the iframe
            const tabSelector = '#PageList1 > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)'; // Replace with the actual tab selector within the iframe
            await frameElementHandle.waitForSelector(tabSelector, { visible: true });
            await frameElementHandle.click(tabSelector);
            const pageheader = frameElementHandle.locator('#h1.title')
            if (pageheader.isVisible())
            //await frameElementHandle.waitForSelector("/html/body/div[4]/div[2]/div[2]/div[2]/header/div/div[2]/div[2]/div/div/div/div[1]/h1", { visible: true })
            {
                const headerSelector = 'h1'; // Replace with the actual selector of the header
                const headerText = await page.$eval(headerSelector, element => element.innerText);
                console.log(headerText)
            }
            const mainFrame = page.mainFrame();
            await mainFrame.locator('h2');
            const homeTitle = await mainFrame.title();
            console.log(homeTitle)
            expect(homeTitle).toBe('omayo (QAFox.com)');
        }
        else {
            console.error('Iframe element not found.');
        }
    })

    test.only('multiple windows', async ({ page }) => {
        await page.goto('http://omayo.blogspot.com/'); 
        
        // await page.evaluate(() => {
        //     window.scrollBy(0, 1500); // Scroll down by the height of the viewport
        // });

        const [newPage] = await Promise.all([
            page.waitForEvent('popup'), // Wait for the new page (popup) event
            page.click('//a[contains(text(),"SeleniumTutorial")]') // Replace with the actual selector of the link that opens a new tab
        ]);
        
        // Wait for the new page to load content
        await newPage.waitForLoadState();
        
        // Interact with the new page
        const newPageHeader = await newPage.title() // Adjust selector as needed
        console.log(`New Page Header: ${newPageHeader}`);
        //   await page.close()
        
        // Optionally, switch back to the main page and interact with it
        await page.bringToFront();
        newPage.close();
        const mainPageHeader = await page.title() // Adjust selector as needed
        console.log(`Main Page Header: ${mainPageHeader}`);
        
        //   Open a new window
        const [newPage1] = await Promise.all([
            page.waitForEvent('popup'), // Wait for the new page (popup) event
            page.click('//a[contains(text(),"Open a popup window")]') // Replace with the actual selector of the link that opens a new window
        ]);

        await newPage1.waitForLoadState();
        const newPageHeader1 = await newPage1.title() // Adjust selector as needed
        console.log(`New Window Header: ${newPageHeader1}`);
        newPage1.close();

        await page.waitForTimeout(3000)
        await page.close() // Close the browser when done


    });


    test('handling mouse clicks', { tag: ['@double-click', '@hover'], }, async ({ page }) => {
        await page.goto('http://omayo.blogspot.com/'); 
        test.slow()

        await page.getByTitle('Free Selenium tutorials').hover()
        console.log(await page.getByTitle('Free Selenium tutorials').innerText())

        await page.locator('[id="testdoubleclick"]').dblclick()
        await page.locator('[id="myDropdown"]').click({ label: 'Flipkart' })
        await page.waitForTimeout(3000)
        //await page.locator('//div[@class="_16ZfEv"]').waitFor()
        console.log(await page.title())
    });



    test.fail('handling assertions', { tag: ['@double-click', '@hover'], }, async ({ page }) => {

        test.info().annotations.push({
            type: 'browser version',
            description: browser.version(),
        })

        await page.goto('https://www.demoblaze.com/')
        test.slow()

        await expect(page).toHaveTitle('STORE')
        await page.waitForTimeout(1000)
        await page.locator('[id="login2"]').click();
        await page.locator('id=loginusername').fill('Marcus')
        await page.locator('[id="loginpassword"]').fill('m@rs')//using object property
        await page.getByRole('button', { name: 'Log in' }).click()

        //await expect(page.getByText('Welcome Marcus', { exact: true })).toBeTruthy()
        const user=page.locator('#nameofuser')
        if (await expect(user).toBeVisible)
        await expect(page.locator('#nameofuser')).toHaveText('Welcome Marcus')

        await expect(page.locator('#itemc')).toHaveCount(3);
        
        
        console.log(await page.getByText('Welcome Marcus', { exact: true }).innerText())
        await page.locator('//a[contains(text(),"Nokia lumia 1520")]').click();//using xpath
        await page.getByText('Add to cart').click()
        page.on('dialog', async dialog => {
        await dialog.accept()})
        await page.click('#cartur')//Handling Click Action
        //await page.locator('#cartur').click()

        await page.getByRole('button', { name: 'Place Order' }).click()
        const textbox=page.getByRole('textbox')
        await expect(textbox).toHaveCount(6);
        await page.locator('#name').fill('Jacob')
        await page.locator('#country').fill('India')
        await page.locator('#city').fill('Kolkata')
        await page.locator('#card').fill('1234567890')
        //await page.locator('#card').fill('')
        await page.locator('#month').fill('11')
        await page.locator('#year').fill('2030')
        await page.getByRole('button', { name: 'Purchase' }).click()
        expect(page.getByText('Thank you for your purchase!',{exact:true})).toBeTruthy()
        //expect(page.getByText('Thank you for your purchase!',{exact:true})).toBeFalsy()

        const idPattern = /\d{7}/;
        const confirmdetails=page.locator('//p[contains(@class,"lead text-muted")]')
        console.log(await confirmdetails.innerText())
        // Extract the text of the element
        const idText = await confirmdetails.textContent();
        // Use regex to extract and validate the dynamic part of the ID
        const matchedId = idText.match(idPattern)[0];  // Extract the number
        //await expect(confirmdetails).toContainText(/Id: .+/)
        console.log(`The dynamic ID is: ${matchedId}`);
        //await page.getByRole('button', { name: 'OK' })
        await page.locator('//button[@class="confirm btn btn-lg btn-primary"]').click()
        await page.locator('[id="logout2"]').press('Enter')//keyboard shortcut

    });




});


// npx playwright test ./tests/demo.spec.js --project firefox  --headed --workers=1
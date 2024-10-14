// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: 2,
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',

  reporter: [
    ['line', { outputFile: 'line-test-results.txt'}],
    ['dot', { outputFile: 'dot-test-results.txt'}],
    ['list', { outputFile: 'list-test-results.txt'}],
    ['json', { outputFile: 'test-results.json'}],
    ['html', { open: 'never', outputFile: 'test-results.html'}]

  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */

//  baseURL: 'http://omayo.blogspot.com/',

// url for webserver local url testing
    // baseURL: 'http://127.0.0.1:3000',

// API end point for api tests
      //  baseURL: 'https://jsonplaceholder.typicode.com',
      // baseURL: 'https://reqres.in/',
      baseURL: 'https://www.demoblaze.com',
      headless: false,
      browserName: 'chromium',
      storageState: 'State.json',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    // browser to texecute the tests
    // browserName: 'firefox',

    // resige thë window
    // viewport: { width: 1500, height: 1000 },

    
    // capture screenshot for failed test
    screenshot: 'only-on-failure',
    // capture video for retry tests
    video: 'on',
  },

  //kind of global timeout
  timeout: 5*60*100, // 5 * 60 * 1000 = 30000 - 30 seconds
  
  // globalSetup: require.resolve('C:/Users/adminuser/Desktop/playwright/tests/globalsetup.spec.js'),
  // globalTeardown: require.resolve('C:/Users/adminuser/Desktop/playwright/tests/globalteardown.spec.js'),

     /* Configure projects for major browsers */
     projects: [

      // {
      //   name: 'chromium',
      //   use: { ...devices['Desktop Chrome'] },
      //   retries:0,
      //   timeout:60000
      // },
  
      // {
      //   name: 'firefox',
      //   use: { ...devices['Desktop Firefox'] },
      //   retries:0,
      //   timeout:60000
      // },
  
      // {
      //   name: 'webkit',
      //   use: { ...devices['Desktop Safari'] },
      //   retries:0,
      //   timeout:60000
      // },
  
      {
        // name: 'Pixel 5 Emulation',
        // use: {
        //   browserName: 'chromium',
        //   viewport: { width: 390, height: 840 },
        //   userAgent: 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36',
        //   hasTouch: true,
        //   deviceScaleFactor: 2,
        // isMobile: true,
        // headless: false,
        // },


        // name: 'IOS device Emulation',
        // use: {
        //   browserName: 'chromium',
        //   viewport: { width: 390, height: 844 },
        //   userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15A372 Safari/604.1',
        //   geolocation: { longitude: 0, latitude: 0 },
        //   locale: 'en-US',
        //   hasTouch: true,
        //   deviceScaleFactor: 2,
        //   isMobile: true,
        //   headless: false,
        // },
        
  
  
      },
  
      


     
  //  //Shard 1
  //  {
  //   name: 'Shard-1',
  //   testDir: './tests',
  //   retries: 0,
  //   shard: {total: 5, current: 1},
  // },
  // {
  //   name: 'Shard-2',
  //   testDir: './tests',
  //   retries: 0,
  //   shard: {total: 5, current: 2},
  // },
  // {
  //   name: 'Shard-3',
  //   testDir: './tests',
  //   retries: 0,
  //   shard: {total: 5, current: 3},
  // },
  // {
  //   name: 'Shard-4',
  //   testDir: './tests',
  //   retries: 0,
  //   shard: {total: 5, current: 4},
  // },
  // {
  //   name: 'Shard-5',
  //   testDir: './tests',
  //   retries: 0,
  //   shard: {total: 5, current: 5},
  // }
  
  
      /* Test against mobile viewports. */
      // {
      //   name: 'Mobile Chrome',
      //   use: { ...devices['Pixel 5'] },
      // },
      // {
      //   name: 'Mobile Safari',
      //   use: { ...devices['iPhone 12'] },
      // },
  
      /* Test against branded browsers. */
      // {
      //   name: 'Microsoft Edge',
      //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
      // },
      // {
      //   name: 'Google Chrome',
      //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      // },
    ],




  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },




});


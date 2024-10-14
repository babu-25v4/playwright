import { test, expect } from './fixtures.spec.js'; // Import the fixture

// This test automatically uses the logged-in page from the fixture
test('Verify logged-in user dashboard', async ({ loggedInPage }) => {
  // Since the page is already logged in, directly assert dashboard behavior
  await loggedInPage.goto('https://www.demoblaze.com/index.html');
  
  // Assert something on the dashboard
   const user=loggedInPage.locator('#nameofuser')
    if (user.toBeVisible)
    await expect(user).toHaveText('Welcome Marcus')
  });

// Another test can use the same fixture
test('Verify user can log out', async ({ loggedInPage }) => {
  // The user is logged in already, so just log out
  await loggedInPage.click('[id="logout2"]');

  // Verify that the user is logged out
  console.log(await loggedInPage.locator('[id="login2"]').textContent())
});
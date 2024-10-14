import { test, expect, request } from '@playwright/test';

test.describe('API Testing with Playwright', () => {

  test('GET request - Fetch user details', async ({ request }) => {
    // Perform a GET request to the specified endpoint
    const response = await request.get('/users/2');
    // Assert that the response status is 200 (OK)
    expect(response.status()).toBe(200);
    // Parse the JSON response body
    const responseBody = await response.json();
    console.log(responseBody)
    // Assert that the user details are correct
    /*expect(responseBody).toHaveProperty('id', 1);
    expect(responseBody).toHaveProperty('name', 'Leanne Graham');
    expect(responseBody).toHaveProperty('email', 'Sincere@april.biz');*/
  });

  test('POST request - Create a new user', async ({ request }) => {
    // Perform a POST request to create a new user
    const response = await request.post('/users', {
      data: {
        name: 'Peter Parker',
        username: 'pet_park',
        email: 'peter.parker@example.com'
      }
    });

    // Assert that the response status is 201 (Created)
    expect(response.status()).toBe(201);
    // Parse the JSON response body
    const responseBody = await response.json();
    console.log(responseBody);
    // Assert that the response contains the newly created user
    expect(responseBody).toHaveProperty('name', 'Peter Parker');
    expect(responseBody).toHaveProperty('username', 'pet_park');
    expect(responseBody).toHaveProperty('email', 'peter.parker@example.com');
  });

});
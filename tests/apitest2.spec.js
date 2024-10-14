import { test, expect, request } from '@playwright/test';

test.describe('API Testing with Playwright', () => {

  test('GET request - Fetch user details', async ({ request }) => {
    // Perform a GET request to the specified endpoint
    const response = await request.get('/api/users?page=2');
    // Assert that the response status is 200 (OK)
    expect(response.status()).toBe(200);
    // Parse the JSON response body
    const responseBody = await response.json();
    console.log(responseBody)
   
  });

  test('POST request - Create a new user', async ({ request }) => {
    // Perform a POST request to create a new user
    const response = await request.post('/api/users', {
      data: {
        name: 'morpheus',
        job: 'leader'
       
      }
    });

    // Assert that the response status is 201 (Created)
    expect(response.status()).toBe(201);
    // Parse the JSON response body
    const responseBody = await response.json();
    console.log(responseBody);
    // Assert that the response contains the newly created user
    expect(responseBody).toHaveProperty('name', 'morpheus');
    expect(responseBody).toHaveProperty('job', 'leader');
    // expect(responseBody).toHaveProperty('id', '592');
  });

});
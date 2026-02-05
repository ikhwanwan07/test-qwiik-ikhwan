import { test, expect } from '@playwright/test';
test.describe('test Pet', () => {

    test('POST - Create a new pet', async ({ request }) => {
        const response = await request.post(`https://petstore.swagger.io/v2/pet`, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                id: 0,
                category: {
                    id: 0,
                    name: "string"
                },
                name: "doggie",
                photoUrls: [
                    "string"
                ],
                tags: [
                    {
                    id: 0,
                    name: "string"
                    }
                ],
                status: "available"
            }
                
        });

        // Then the response status should be 201
        expect(response.status()).toBe(200);
        const body = await response.json();
        console.log(body);
        // And the response should match the post schema
        //expect(schemaPost.parse(body)).toBeDefined();
    });

    test('GET - Retrieve all user', async ({ request }) => {
        const response = await request.get(`https://petstore.swagger.io/v2/pet/2`, {
        });

        // Then the response status should be 200
        expect(response.status()).toBe(200);
        const body = await response.json();
        // And the response should match the get user schema
       // expect(schemaGetUser.parse(body)).toBeDefined();
            console.log(body);
        });
    });
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { schemaPost } from '../schema/post-user.ts';
import { schemaGetUser } from '../schema/get-user.ts';

const BASE_URL = process.env.API_URL;
const TOKEN = process.env.API_TOKEN;
const USER_ID = [8327704,8327703,8327702,8114993];
const randomUserId = USER_ID[Math.floor(Math.random() * USER_ID.length)];

test.describe('GoRest API Tests', () => {

    test('POST - Create a new user', async ({ request }) => {
        // Given I have valid user data
        // When I send a POST request to create a new user
        const response = await request.post(`${BASE_URL}/public/v2/users`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                'Content-Type': 'application/json',
            },
            data: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                gender: 'male',
                status: 'active',
            },
        });

        // Then the response status should be 201
        expect(response.status()).toBe(201);
        const body = await response.json();
        console.log(body);
        // And the response should match the post schema
        expect(schemaPost.parse(body)).toBeDefined();
    });

    test('GET - Retrieve all user', async ({ request }) => {
        // Given I have valid authorization token
        // When I send a GET request to retrieve all users
        const response = await request.get(`${BASE_URL}/public/v2/users`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });

        // Then the response status should be 200
        expect(response.status()).toBe(200);
        const body = await response.json();
        // And the response should match the get user schema
        expect(schemaGetUser.parse(body)).toBeDefined();
        console.log(body);
    });

    test('PUT - Edit a user', async ({ request }) => {
        // Given I have a valid user ID
        // When I send a PUT request to update the user
        const response = await request.put(`${BASE_URL}/public/v2/users/${randomUserId}`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                'Content-Type': 'application/json',
            },
            data: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                status: 'active',
            },
        });

        // Then the response status should be 200
        expect(response.status()).toBe(200);
        const body = await response.json();
        // And the response should match the post schema
        expect(schemaPost.parse(body)).toBeDefined();
        console.log(body);
    });
});
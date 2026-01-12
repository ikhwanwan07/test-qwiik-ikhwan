const { Given, When, Then } = require('cucumber');
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/loginPage.js';

Given('I am on the product page', async function () {
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
    await expect(page).toHaveURL(/inventory.html/);
});

When('I enter my shipping information', async function () {
    // Code to enter shipping information
});

When('I select a payment method', async function () {
    // Code to select a payment method
});

Then('I should see the order summary', async function () {
    // Code to verify the order summary is displayed
});

Then('I can complete my purchase', async function () {
    // Code to complete the purchase
});
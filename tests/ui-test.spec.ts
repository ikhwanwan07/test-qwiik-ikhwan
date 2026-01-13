import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/loginPage.js';
import { CheckoutPage } from '../page/checkoutPage.js';
import { faker } from '@faker-js/faker';
import { FilterPage } from '../page/filterPage.js';


const username = process.env.username;
const password = process.env.password;

test.describe('SACE Demo UI Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(username, password);
        await expect(page).toHaveURL(/inventory.html/);
    });
   
    test('should success to Filter Z to A', async ({ page }) => {
        const Filterpage = new FilterPage(page);
        await Filterpage.selectFilterOptionZA();
        await Filterpage.getFirstProductNameZA();
    });

    test('should success to Filter Price low to high', async ({ page }) => {
        const Filterpage = new FilterPage(page);
        await Filterpage.selectFilterOptionLH();
        await Filterpage.getFirstProductNameLH();
    });

    test('should success to Filter Price high to low', async ({ page }) => {
        const Filterpage = new FilterPage(page);
        await Filterpage.selectFilterOptionHL();
        await Filterpage.getFirstProductNameHL();   
          
    });

    test('Process checkout', async ({ page }) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.addToCart();
        await checkoutPage.goToCart();
        await checkoutPage.proceedToCheckout();
        await checkoutPage.fillShippingInfo(faker.person.firstName(), faker.person.lastName(),faker.location.zipCode());
        await checkoutPage.finishOrder();
    });

    
});
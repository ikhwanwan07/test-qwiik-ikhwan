import { checkoutLocators } from "../locators/checkoutLocator";

export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator(checkoutLocators.addToCart);
        this.CartButton =  page.locator(checkoutLocators.CartButton);
        this.firstNameField = page.locator(checkoutLocators.firstNameField);
        this.lastNameField = page.locator(checkoutLocators.lastNameField);
        this.postalCodeField = page.locator(checkoutLocators.postalCodeField);
        this.continueButton = page.locator(checkoutLocators.continueButton);
        this.finishButton = page.locator(checkoutLocators.finishButton);
        this.successInfo = page.getByText(checkoutLocators.successInfo);
        
    }

    // Handle Add to Cart (ATC) click
     async addToCart() {
        await this.addToCartButton.click();
        //expect(await this.page.locator(checkoutLocators.RemoveBtn).isVisible()).toBeTruthy();
    }

    // Click Cart button
    async goToCart() {
        await this.page.locator(checkoutLocators.CartButton).click();
    }

    // Click Checkout button
    async proceedToCheckout() {
        await this.page.getByText(checkoutLocators.CheckoutButton).click();
    }

    // Fill Shipping Information
    async fillShippingInfo(firstName, lastName, postalCode) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.postalCodeField.fill(postalCode);
        await this.continueButton.click();
    }

    // Finish the order
    async finishOrder() {
        await this.finishButton.click();
        //expect(await this.page.getByText(checkoutLocators.successInfo).isVisible()).toBeTruthy();
    }
   
}

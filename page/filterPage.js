import { filterLocators } from '../locators/filterLocator';
import { expect } from '@playwright/test';

export class FilterPage {
    constructor(page) {
        this.page = page;
        this.filterField = page.locator(filterLocators.filterField);
        this.optionFieldZA = filterLocators.optionFieldZA;
        this.optionFieldLH = filterLocators.optionFieldLH;
        this.optionFieldHL = filterLocators.optionFieldHL;    
        this.firstProductNameHL = page.locator(filterLocators.firstproductHL);
        this.firstProductNameLH = page.locator(filterLocators.firstproductLH);
        this.firstProductNameZA = page.locator(filterLocators.firstproductZA);
        this.verifyProductFirtsZA = filterLocators.verifyProductFirtsZA;
        this.verifyProductFirtsLH = filterLocators.verifyProductFirtsLH;
        this.verifyProductFirtsHL = filterLocators.verifyProductFirtsHL;
    }

    // Select filter option
    async selectFilterOptionZA() {
        await this.filterField
        .first()
        .waitFor();
        await this.filterField
        .first()
        .selectOption(this.optionFieldZA);

    }
    async selectFilterOptionLH() {
        await this.filterField
        .first()
        .waitFor();
        await this.filterField
        .first()
        .selectOption(this.optionFieldLH);
    }
    async selectFilterOptionHL() {
        await this.filterField
        .first()
        .waitFor();
        await this.filterField
        .first()
        .selectOption(this.optionFieldHL);
    }
    // Get the name of the first product after filtering
    async getFirstProductNameZA() {

        await expect(this.firstProductNameZA.first()).toHaveText(this.verifyProductFirtsZA);
    }
    async getFirstProductNameLH() {

        await expect(this.firstProductNameLH.first()).toHaveText(this.verifyProductFirtsLH);
    }
    async getFirstProductNameHL() {
        await expect(this.firstProductNameHL.first()).toHaveText(this.verifyProductFirtsHL);
    }
}
import { Locator } from "playwright";

class ProductTemplate {
    locators = {
        template: '.inventory_item',
        buttons: {
            addToCart: '[data-test*="add-to-cart"]',
            remove: 'button[data-test*="remove-"]'
        }
    }

    async addProductToCart(locator: Locator): Promise<void>{
        await locator.locator(this.locators.buttons.addToCart).click();
    }
}

// For inheritance
module.exports = new ProductTemplate();
export = new ProductTemplate();

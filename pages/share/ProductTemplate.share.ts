import { Locator } from "playwright";

class ProductTemplate {
    locators = {
        template: '.inventory_item',
        title: '.inventory_item_name',
        price: '.inventory_item_price',
        buttons: {
            addToCart: '[data-test*="add-to-cart"]',
            remove: 'button[data-test*="remove-"]'
        }
    }

    async addProductToCart(locator: Locator): Promise<void>{
        await locator.locator(this.locators.buttons.addToCart).click();
    }

    async getProductTitle(locator: Locator): Promise<string>{
        return await locator.locator(this.locators.title).textContent();
    }

    async getProductPrice(locator: Locator): Promise<string>{
        return await locator.locator(this.locators.price).textContent();
    }
}

// For inheritance
module.exports = new ProductTemplate();
export = new ProductTemplate();

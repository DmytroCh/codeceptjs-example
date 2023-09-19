import assert from "assert";
import { Locator } from "playwright";
import { ROUTES } from "../utils/consts/routes";
const { I, ProductTemplate } = inject();
const eachElement = codeceptjs.container.plugins('eachElement');

class ProductsPage {
    locators = {

    }

    async addAllProductsToCart():Promise<void>{
        await eachElement(
            'Add all products to the cart', 
            ProductTemplate.locators.template, 
            async (product: Locator) => {
                await ProductTemplate.addProductToCart(product);
                //await el.locator(this.locators.buttons.addToCart).click();
            });
    }

    openProductByName(name: string){
        I.see(name);
        I.click(name);
        I.seeInCurrentUrl(ROUTES.inventoryItem);
    }

    async countOrderedProducts(expectedNumber: number): Promise<void> {
        let products = await I.grabNumberOfVisibleElements(ProductTemplate.locators.buttons.remove);
        assert(expectedNumber === products, `Expected "${expectedNumber}" but got "${products}"`)
    }

    async countAllProducts(): Promise<number> {
        return await I.grabNumberOfVisibleElements(ProductTemplate.locators.template);
    }
}

// For inheritance
module.exports = new ProductsPage();
export = new ProductsPage();
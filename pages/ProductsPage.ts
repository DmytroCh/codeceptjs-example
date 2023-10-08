import assert from "assert";
import { Locator } from "playwright";
import { ROUTES } from "../utils/consts/routes";
const { I, ProductTemplate } = inject();
const eachElement = codeceptjs.container.plugins('eachElement');

class ProductsPage {
    locators = {
        dropdowns: {
            sort: {
                dropdown: '.product_sort_container',
                options:{
                    azOption: 'az',
                    zaOption: 'za',
                    lowHighOption: 'lohi',
                    highLowOption: 'hilo',
                },
                activeOption:'.active_option'
            }
        }
    }

    clickSortDropdown():void{
        I.seeElement(this.locators.dropdowns.sort.dropdown);
        I.click(this.locators.dropdowns.sort.dropdown);
    }

    selectSortingOption(sortingOption: string, expectedOption: string):void{
        this.clickSortDropdown();
        I.selectOption(this.locators.dropdowns.sort.dropdown, sortingOption);
        I.see(expectedOption);
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

    async getProductsTitles():Promise<Array<string>>{
        const titles: Array<string> = [];
        await eachElement(
            'Get All products titles', 
            ProductTemplate.locators.template, 
            async (product: Locator) => {
                titles.push(await ProductTemplate.getProductTitle(product));
            });
        return titles;
    }

    async getProductsPrices():Promise<Array<string>>{
        const prices: Array<string> = [];
        await eachElement(
            'Get All products prices', 
            ProductTemplate.locators.template, 
            async (product: Locator) => {
                prices.push(await ProductTemplate.getProductPrice(product));
            });
        return prices;
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
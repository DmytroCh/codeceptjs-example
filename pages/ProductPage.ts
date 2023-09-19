const { I } = inject();

class ProductPage {
    locators = {
        buttons: {
            addToCart: 'Add to cart',
            removeFromCart: 'Remove'
        }
    }
    addToCart():void{
        I.click(this.locators.buttons.addToCart);
        I.see(this.locators.buttons.removeFromCart);
    }
}

// For inheritance
module.exports = new ProductPage();
export = new ProductPage();
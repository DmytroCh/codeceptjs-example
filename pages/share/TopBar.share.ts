import { ROUTES } from "../../utils/consts/routes";

const { I } = inject();

class TopBar {
    locators = {
        buttons:{
            cart: '.shopping_cart_link'
        }
    }

    openCart():void{
        I.click(this.locators.buttons.cart);
        I.seeInCurrentUrl(ROUTES.cart);
    }
}

// For inheritance
module.exports = new TopBar();
export = new TopBar();

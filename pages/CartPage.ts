import assert from "assert";
import { ROUTES } from "../utils/consts/routes";
import { DeliveryUser } from "../utils/types/types";
const { I, CartItem, CheckoutStepOnePage, CheckoutStepTwoPage } = inject();

class CartPage {
    locators = {
        buttons: {
            checkout: '#checkout'

        }
    }

    async countAllProducts(): Promise<number> {
        return await I.grabNumberOfVisibleElements(CartItem.locators.template);
    }


    async removeProductFromCartByName(name: string): Promise<void>{
        I.click(
            locate(CartItem.locators.buttons.remove)
                .inside(locate(CartItem.locators.template)
                    .withDescendant(
                        locate(CartItem.locators.titles.itemTitle)
                            .withText(name))));
    }

    async getProductsTittles(): Promise<Array<string>> {
        return await I.grabTextFromAll(CartItem.locators.titles.itemTitle);
    }

    async checkIfProductInCart(name: string): Promise<void>{
        I.see(name);
    }

    sendOrder(user: DeliveryUser): void {
        I.click(this.locators.buttons.checkout);
        I.seeInCurrentUrl(ROUTES.checkoutFirstStep);
        CheckoutStepOnePage.sendDeliveryData(user);
        CheckoutStepTwoPage.finishOrder();
    }

}

// For inheritance
module.exports = new CartPage();
export = new CartPage();
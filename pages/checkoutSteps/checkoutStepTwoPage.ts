import { ROUTES } from "../../utils/consts/routes";
const { I } = inject();

class CheckoutStepTwoPage {
    locators = {
        buttons:{
            finish: '#finish'
        }
    }
    finishOrder(): void {
        I.click(this.locators.buttons.finish);
        I.seeInCurrentUrl(ROUTES.checkoutComplete);
    }
}

// For inheritance
module.exports = new CheckoutStepTwoPage();
export = new CheckoutStepTwoPage();
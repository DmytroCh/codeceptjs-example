import { ROUTES } from "../../utils/consts/routes";
import { DeliveryUser } from "../../utils/types/types";
const { I } = inject();

class CheckoutStepOnePage {
    locators = {
        inputs:{
            name: '#first-name',
            surname:'#last-name',
            postCode: '#postal-code'
        },
        buttons:{
            checkout: '#continue'
        }
    }

    sendDeliveryData(user: DeliveryUser): void {
        I.fillField(this.locators.inputs.name, user.name);
        I.fillField(this.locators.inputs.surname, user.surname);
        I.fillField(this.locators.inputs.postCode, user.postCode);
        I.click(this.locators.buttons.checkout);
        I.seeInCurrentUrl(ROUTES.checkoutSecondStep);
    }
}

// For inheritance
module.exports = new CheckoutStepOnePage();
export = new CheckoutStepOnePage();
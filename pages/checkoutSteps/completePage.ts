import { ROUTES } from "../../utils/consts/routes";
const { I } = inject();

class CompletePage {
    locators = {
        headers: {
            completeHeader: '.complete-header'
        }
    }
    verifyOrder(){
        I.seeInCurrentUrl(ROUTES.checkoutComplete);
        I.waitForVisible(this.locators.headers.completeHeader);
    }
}

// For inheritance
module.exports = new CompletePage();
export = new CompletePage();
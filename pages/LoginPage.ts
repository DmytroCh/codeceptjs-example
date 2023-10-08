import { ROUTES } from "../utils/consts/routes";
import { User } from "../utils/types/types";
const { I } = inject();

class LoginPage {
    locators = {
        fields:{
            email: 'Username',
            password: 'Password'
        },
        buttons: {
            login: 'Login'
        },
        errors:{
            lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
        }

    }

    fillCredentials(user: User):void {
        I.fillField(this.locators.fields.email, user.email);
        I.fillField(this.locators.fields.password, user.password);
    }

    login(user: User):void {
        I.amOnPage(ROUTES.base);
        this.fillCredentials(user);
        I.click(this.locators.buttons.login);
    }
}

// For inheritance
module.exports = new LoginPage();
export = new LoginPage();
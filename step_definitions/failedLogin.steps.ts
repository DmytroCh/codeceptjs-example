import { ROUTES } from "../utils/consts/routes";
import { getUser } from "../utils/consts/users";
import { usersOptions } from "../utils/types/types";
const { I, LoginPage } = inject();

Given('I am on the login page', () => {
  // From "features/failedLogin.feature" {"line":5,"column":5}
  I.amOnPage(ROUTES.base);
});

When('I try to log in as a {string}', (userType: usersOptions) => {
  // From "features/failedLogin.feature" {"line":6,"column":5}
  const user = getUser(userType);
  LoginPage.login(user);
  I.seeInCurrentUrl(ROUTES.base);
});

Then('I expect the login validation to fail', () => {
  // From "features/failedLogin.feature" {"line":7,"column":5}
  I.see(LoginPage.locators.errors.lockedOut);
});

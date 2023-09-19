import assert from "assert";
import { deliveryUser, getUser } from "../utils/consts/users";
import { usersOptions } from "../utils/types/types";
const { I, LoginPage, ProductsPage, TopBar, CartPage, CompletePage } = inject();

// TODO: find solution for better way to share data between steps
const itemName = 'Sauce Labs Fleece Jacket';
let totalItemsNumber;

Given('I am logged in as a {string}', (userType: usersOptions) => {
  // From "features/checkout.feature" {"line":6,"column":5}
  const user = getUser(userType);
  LoginPage.login(user);
});

When('I add all items to the cart', async () => {
  // From "features/checkout.feature" {"line":7,"column":5}
  totalItemsNumber = await ProductsPage.countAllProducts();
  await ProductsPage.addAllProductsToCart();
  await ProductsPage.countOrderedProducts(totalItemsNumber);
});

When('I go to the cart', () => {
  // From "features/checkout.feature" {"line":8,"column":5}
  TopBar.openCart();
});

When('I find the third item by name and remove it from the cart', async () => {
  // From "features/checkout.feature" {"line":9,"column":5}
  /*
  This description is not clear for me, there are two options:
    - we are looking for third element and remove it from cart
    - we are looking for element with given name and remove it from the cart
  I selected second option, so I looking for item with spercific name and remove it from the list.
  Let me know if I should change it in the future.
  */
  await CartPage.removeProductFromCartByName(itemName);
});

Then('I validate in the Checkout Overview that it only contains the items that I want to purchase', async () => {
  // From "features/checkout.feature" {"line":10,"column":5}
  const itemsTitels: Array<string> = await CartPage.getProductsTittles();
  assert(!itemsTitels.includes(itemName));
});

Then('I validate in the Checkout Overview that the Item Total is correct', async () => {
  // From "features/checkout.feature" {"line":11,"column":5}
  const actualItemsNubmer = await CartPage.countAllProducts();
  assert(totalItemsNumber - 1 === actualItemsNubmer);
});

Then('I finish the purchase', () => {
  // From "features/checkout.feature" {"line":12,"column":5}
  CartPage.sendOrder(deliveryUser);
});

Then('I validate that the website confirms the order', () => {
  // From "features/checkout.feature" {"line":13,"column":5}
  CompletePage.verifyOrder()
});

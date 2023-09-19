const { ProductsPage, ProductPage, CartPage } = inject();

const productName = 'Sauce Labs Onesie';

When('I find and click on an item by name', () => {
  // From "features/addingToCart.feature" {"line":7,"column":5}
  ProductsPage.openProductByName(productName);
});

When('I add it to the cart from the item page', () => {
  // From "features/addingToCart.feature" {"line":8,"column":5}
  ProductPage.addToCart();
});

Then('I validate that the item was added', async () => {
  // From "features/addingToCart.feature" {"line":10,"column":5}
  await CartPage.checkIfProductInCart(productName);
});

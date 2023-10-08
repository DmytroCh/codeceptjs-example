import assert from 'assert';
const { I } = inject();

When('I sort the products by price', async () => {
  // From "features/sortByPrice.feature" {"line":6,"column":5}
  const { ProductsPage } = inject();
  ProductsPage.selectSortingOption(ProductsPage.locators.dropdowns.sort.options.lowHighOption, "Price (low to high)");
});

Then('I validate that the sorting by Price is correct', async () => {
    const { ProductsPage } = inject();
    const prices = (await ProductsPage.getProductsPrices()).map(el => Number(el.replace('$', '')));
    const sortedPrices = [...prices];
    sortedPrices.sort((a, b) => a - b);
    assert.deepEqual(prices,sortedPrices);
  });

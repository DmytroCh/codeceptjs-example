import assert from 'assert';
const { I } = inject();

When('I sort the products by name', async () => {
  // From "features/sorting.feature" {"line":7,"column":5}
  const { ProductsPage } = inject();
  ProductsPage.selectSortingOption(ProductsPage.locators.dropdowns.sort.options.azOption, "Name (A to Z)");
});

Then('I validate that the sorting is correct', async () => {
  // From "features/sorting.feature" {"line":8,"column":5}
  const { ProductsPage } = inject();
  const titles = await ProductsPage.getProductsTitles();
  const sortedTitles = [...titles];
  sortedTitles.sort();
  assert.deepEqual(titles,sortedTitles);
});

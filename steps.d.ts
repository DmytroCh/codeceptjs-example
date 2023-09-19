/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type LoginPage = typeof import('./e2e/pages/LoginPage');
type ProductsPage = typeof import('./e2e/pages/ProductsPage');
type CartPage = typeof import('./e2e/pages/CartPage');
type ProductTemplate = typeof import('./e2e/pages/share/ProductTemplate.share');
type TopBar = typeof import('./e2e/pages/share/TopBar.share');
type CartItem = typeof import('./e2e/pages/share/CartItem.share');
type CheckoutStepOnePage = typeof import('./e2e/pages/checkoutSteps/checkoutStepOnePage');
type CheckoutStepTwoPage = typeof import('./e2e/pages/checkoutSteps/checkoutStepTwoPage');
type CompletePage = typeof import('./e2e/pages/checkoutSteps/completePage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, LoginPage: LoginPage, ProductsPage: ProductsPage, CartPage: CartPage, ProductTemplate: ProductTemplate, TopBar: TopBar, CartItem: CartItem, CheckoutStepOnePage: CheckoutStepOnePage, CheckoutStepTwoPage: CheckoutStepTwoPage, CompletePage: CompletePage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}

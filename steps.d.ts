/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type LoginPage = typeof import('./pages/LoginPage');
type ProductsPage = typeof import('./pages/ProductsPage');
type CartPage = typeof import('./pages/CartPage');
type ProductTemplate = typeof import('./pages/share/ProductTemplate.share');
type TopBar = typeof import('./pages/share/TopBar.share');
type CartItem = typeof import('./pages/share/CartItem.share');
type CheckoutStepOnePage = typeof import('./pages/checkoutSteps/checkoutStepOnePage');
type CheckoutStepTwoPage = typeof import('./pages/checkoutSteps/checkoutStepTwoPage');
type CompletePage = typeof import('./pages/checkoutSteps/completePage');
type ProductPage = typeof import('./pages/ProductPage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, LoginPage: LoginPage, ProductsPage: ProductsPage, CartPage: CartPage, ProductTemplate: ProductTemplate, TopBar: TopBar, CartItem: CartItem, CheckoutStepOnePage: CheckoutStepOnePage, CheckoutStepTwoPage: CheckoutStepTwoPage, CompletePage: CompletePage, ProductPage: ProductPage }
  interface Methods extends Playwright, REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}

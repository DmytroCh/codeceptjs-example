import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  gherkin: {
    features: './features/*.feature', // feature files location
    steps: [
      './step_definitions/checkout.steps.ts',
      './step_definitions/addingToCart.steps.ts',
      './step_definitions/sorting.steps.ts',
      './step_definitions/sortingByPrice.steps.ts',
      './step_definitions/failedLogin.steps.ts'
    ] // step definitions location
  },
  mocha: {
    "reporterOptions": {
      "reportDir": "output"
    }
  },
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true
    }
  },
  plugins: {
    screenshotOnFail: { // if true take screenshot of failed scenarios
      enabled: true
    },
  },
  include: {
    I: './steps_file',
    LoginPage: './pages/LoginPage.ts',
    ProductsPage: './pages/ProductsPage.ts',
    CartPage: './pages/CartPage.ts',
    ProductTemplate: './pages/share/ProductTemplate.share.ts',
    TopBar: './pages/share/TopBar.share.ts',
    CartItem: './pages/share/CartItem.share.ts',
    CheckoutStepOnePage: './pages/checkoutSteps/checkoutStepOnePage.ts',
    CheckoutStepTwoPage: './pages/checkoutSteps/checkoutStepTwoPage.ts',
    CompletePage: './pages/checkoutSteps/completePage.ts',
    ProductPage: './pages/ProductPage.ts'
  },
  name: 'codeceptjs'
}
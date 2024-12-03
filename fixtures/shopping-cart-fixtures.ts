import { test as base } from "@playwright/test";
import { ShoppingCartPage } from "../pages/ShoppingCartPage";


type MyFixtures = {
    shoppingCartPage: ShoppingCartPage
}

export const test = base.extend<MyFixtures>({

  shoppingCartPage: async({ page }, use) => {
      const shoppingCartPage = new ShoppingCartPage(page)
      await shoppingCartPage.goto()
      // beforeEach here
      await use(shoppingCartPage)
      // afterEach here
    }
  })
  
  export { expect } from '@playwright/test'
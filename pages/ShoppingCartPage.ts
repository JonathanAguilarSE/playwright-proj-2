import { type Locator, type Page } from "@playwright/test";

export class ShoppingCartPage {
    readonly page: Page
    readonly headerText: Locator
    readonly availableCourses: Locator
    readonly courseImg: Locator
    readonly courseNames: Locator
    readonly schoolTag: Locator
    readonly price: Locator
    readonly discount: Locator
    readonly addBtn: Locator
    readonly itemsInCartText: Locator
    readonly cartItems: Locator;
    readonly totalPrice: Locator;
    readonly placeOrderBtn: Locator;
    readonly successMsg: Locator;



    constructor(page: Page) {
        this.page = page
        this.headerText = page.locator('h1.mt-2')
        this.availableCourses = page.locator('[id*="course"]')
        this.courseImg = page.locator('img[alt^="Course"]')
        this.courseNames = page.locator('.columns h3');
        this.schoolTag = page.locator('.my-3');
        this.price = page.locator('[data-testid="full-price"]');
        this.discount = page.locator('[data-testid="discount"]');
        this.addBtn = page.locator('[id*="course"] button');
        this.itemsInCartText = page.locator('.mb-2');
        this.cartItems = page.locator('[class$="BMnRK"]');
        this.totalPrice = page.locator('#total-price');
        this.placeOrderBtn = page.locator('.mt-3');
        this.successMsg = page.locator('.mt-1');
    }

    async goto() {
        await this.page.goto('https://www.techglobal-training.com/frontend/project-8');
    }

    // async clickSignIn() {
    //     await this.signInButton.click();
    // }

}

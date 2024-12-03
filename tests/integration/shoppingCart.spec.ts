import { expect, test } from "../../fixtures/shopping-cart-fixtures";
import { ShoppingCartPage } from "../../pages/ShoppingCartPage";

test.describe("Shopping Cart", () => {

    test("Test Case 01 - Available Courses Section Validation", async ({ shoppingCartPage }) => {

        await test.step("2. Validate the heading is \“Available Courses\”", async () => {
            await expect(shoppingCartPage.headerText).toHaveText("Available Courses");
        })

        await test.step("3. Validate that there are 3 courses displayed", async () => {
            const courseCount = await shoppingCartPage.availableCourses.count()
            expect(courseCount).toEqual(3);
        })

        await test.step("4. Validate that each course has an image, name, TechGlobal School tag, and a price of more than zero", async () => {
            const allCourseImages = await shoppingCartPage.courseImg.all()
            const allCourseNames = await shoppingCartPage.courseNames.all()
            const allSchoolTags = await shoppingCartPage.schoolTag.all()
            const allPrices = await shoppingCartPage.price.all()
            const courseNamesArr = [ "SDET Course | Cypress Playwright", "Playwright Automation Testing", "Cypress Automation Course" ]

            for (const img of allCourseImages) {
                await expect(img).toBeVisible()
            }

            for (let i = 0; i < allCourseNames.length; i++) {
                const name = shoppingCartPage.courseNames.nth(i)
                await expect(name).toHaveText(courseNamesArr[i])
            }
  
            // for (const name of allCourseNames) {
            //     console.log(allCourseNames)
            //     await expect(name).toHaveText(courseNamesArr)
            // }

            for (const tag of allSchoolTags) {
                await expect(tag).toHaveText("TechGlobal School")
            }

            for (const price of allPrices) {
                const text = await price.textContent()
                const textInNumber = Number(text?.replace(/[^0-9]/g, ""))

                expect(textInNumber).toBeGreaterThan(0)
            }
        })

        await test.step("5. Validate the first 2 courses have discount tags", async () => {
            const discountCount = await shoppingCartPage.discount.count()
            expect(discountCount).toEqual(2);
        })

        await test.step("6. Validate that there is an “Add to Cart” button under each course which is displayed, enabled, and has the text \“Add to Cart\”", async () => {
            const allAddBtn = await shoppingCartPage.addBtn.all()
            expect(allAddBtn).toHaveLength(3)
            for (const button of allAddBtn) {
                await expect(button).toBeEnabled()
                await expect(button).toHaveText("Add to Cart")
            }
        })
    })

    test("Test Case 02 - Cart Section Validation", async ({ shoppingCartPage}) => {

        await test.step("2. Validate the heading is \“Items Added to Cart\”", async () => {
            await expect(shoppingCartPage.itemsInCartText).toHaveText("Items Added to Cart")
        })

        await test.step("3. Validate that the cart is empty by default", async () => {
            const cartItemsCount = await shoppingCartPage.cartItems.count()
            expect(cartItemsCount).toEqual(0)
        })

        await test.step("4. Validate that the total price is zero “$0” by default", async () => {
            const totalNumberText = await shoppingCartPage.totalPrice.textContent()
            // console.log(totalNumberText)
            const numbersOnly = Number(totalNumberText?.split("").filter(char => /[0-9]/.test(char)))
            expect(numbersOnly).toEqual(0)
        })

        await test.step("5. Validate that there is a \“Place Order\” button is displayed, disabled, and has the text \“Place Order\”", async () => {
            await expect(shoppingCartPage.placeOrderBtn).toBeVisible()
            await expect(shoppingCartPage.placeOrderBtn).toBeDisabled()
            await expect(shoppingCartPage.placeOrderBtn).toHaveText("Place Order")
        })
    })

    test("Test Case 03 - Add a Course to the Cart and Validate", async ({ shoppingCartPage}) => {

        await test.step("2. Click on the “Add to Cart” button for one of the courses", async () => {
            const sdetCourse = shoppingCartPage.addBtn.first()
            await sdetCourse.click()
        })

        await test.step("3. Validate that the course is displayed in the cart with its image, name, and discount amount if available", async () => {
            await expect(shoppingCartPage.cartItems).toBeVisible()
            
        })
    })

    

})
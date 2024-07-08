import {Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from "./BasePage";
import {pageFixture} from '../hooks/pageFixture';

export class HomePage extends BasePage {

    elements = {
        naviLinks: 'li a',
        welcomeTxt: '//div[@class="welcome_msg"]//h4[1]',
        welcomeToAutomationTxt: 'div > h4',
        contactUsLink: '//a[contains(text(),"Contact Us")]',
        subcategories: '/html/body/div/div[1]/div[1]/section/nav/ul/li/a',
        fastShipping: "///h2[@innertext='Fast shipping']",
        easyShipping: "///h2[@innertext='Easy Payments']",
        shippingOptions: "///h2[@innertext='Shipping Options']",
        largeVariety: "///h2[@innertext='Large Variety']",
        featured: "//?/span[@innertext='Featured']",
        product1: '[title="Skinsheen Bronzer Stick"]',
        product2: '[title="Absolue Eye Precious Cells"]',
        product3: '[title="Benefit Bella Bamba"]',
        product4: '[title="Absolue Eye Precious Cells"]',
        product5: '[title="Total Moisture Facial Cream"]',
        promoBlockList: '.col-md-3.col-xs-6.promo_block',
        productName: "a.prdocutname",
        productList: "div.thumbnail",
        addToCartList: "a.productcart",
        saleLabelList: '[class="sale"]',
        outOfStock: '[class="nostock"]'

    }
    private base: PlaywrightWrapper;

    constructor(page: Page) {
        super(page);
        this.base = new PlaywrightWrapper(page);
    }

    async visitIndexPage() {
        await this.page.goto('/');
    }

    async navigateToIndexPage() {
        await this.page.goto('https://automationteststore.com');
    }

    async welcomeMessage() {
        return this.page.locator(this.elements.welcomeTxt);
    }

    async tapOnContactUsLink() {
        await this.page.locator(this.elements.contactUsLink).click();
    }

    async subcategoriesMenuList() {
        return this.page.locator(this.elements.subcategories);
    }

    async welcomeToAutomation() {
        await this.page.waitForSelector(this.elements.welcomeToAutomationTxt)
        return pageFixture.page.locator(this.elements.welcomeToAutomationTxt);
    }

    async navLinkList() {
        return this.page.locator(this.elements.naviLinks);
    }

    async productsList() {
        return this.page.locator(this.elements.productList);
    }

    async addToCartList() {
        return this.page.locator(this.elements.addToCartList);
    }

    async promoBlockList() {
        return this.page.locator(this.elements.promoBlockList);
    }

    async productsName() {
        return this.page.locator(this.elements.productName);
    }

    async fastShipping() {
        return this.page.locator(this.elements.fastShipping);
    }

    async easyShipping() {
        return this.page.locator(this.elements.easyShipping);
    }

    async shippingOptions() {
        return this.page.locator(this.elements.shippingOptions)
    }

    async largeVariety() {
        return this.page.locator(this.elements.largeVariety)
    }

    async product1() {
        return this.page.locator(this.elements.product1);
    }

    async product2() {
        return this.page.locator(this.elements.product2);
    }

    async product3() {
        return this.page.locator(this.elements.product3);
    }

    async product4() {
        return this.page.locator(this.elements.product4);
    }

    async product5() {
        return this.page.locator(this.elements.product5);
    }

    async clickProduct1() {
        await this.page.locator(this.elements.product1).click();
    }

    async clickProduct2() {
        await this.page.locator(this.elements.product2).click();
    }

    async clickProduct3() {
        await this.page.locator(this.elements.product3).click();
    }

    async clickProduct4() {
        await this.page.locator(this.elements.product4).click();
    }

    async clickProduct5() {
        await this.page.locator(this.elements.product5).click();
    }

//   async verifyAllCategories(categories: string[]) {
//     const bookCategories = this.page.locator(this.elements.categories);
//     await expect(bookCategories).toHaveText(categories);
// }

// async addBookToCart(category: string) {
//     await this.header.enterBookName(category);
//     await expect(this.page.locator(this.elements.title))
//         .toHaveText(category, { ignoreCase: true });
//     this.page.click(this.elements.addToCartBtn);
//     const toast = this.page.locator(this.elements.snackBar);
//     await expect(toast).toBeVisible();
//     await expect(toast).toHaveText("One Item added to cart");
// }

}



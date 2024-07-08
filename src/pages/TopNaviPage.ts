import {Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from './BasePage';
import {pageFixture} from "../hooks/pageFixture";

export class TopNaviPage extends BasePage {

    private base: PlaywrightWrapper
    private elements = {
        searchBox: "#filter_keyword",
        searchIcon: ".button-in-search",
        account: "#main_menu_top .menu_account .menu_text",
        checkout: "(//span[text()='Checkout'])[1]",
        facebook: "(//a[@class='facebook'])[1]",
        twitter: "(//a[@class='twitter'])[1]",
        linkedin: "(//a[@class='linkedin'])[1]",
        dollarUS: "(//a[@class='dropdown-toggle']//span)[1]",
        items: '[class="dropdown-toggle"][2]',
        menuList: "/html/body/div/div[1]/div[1]/section/nav/ul/li/a",
        logo: "a.logo",
        loginOrRegisterLink: "ul[id='customer_menu_top'] li a",
        topMenuList: "/html/body/div/header/div[1]/div/div/div/div/div/ul/li/a",
        home: ".menu_home",
        apparelAccessories: "//a[text()='Apparel & accessories']",
        makeup: "//a[text()='Makeup']",
        skincare: "//a[text()='Skincare']",
        fragrance: "//a[text()='Fragrance']",
        men: "//a[text()='Men']",
        haircare: "//a[text()='Hair Care']",
        books: "//a[text()='Books']",
        subcategories: '/html/body/div/div[1]/div[1]/section/nav/ul/li/a',
        specialsLink: "ul#main_menu_top>li>a>span",
        accountDropdownList: "/html/body/div/header/div[1]/div/div[2]/div/div/div/ul/li/ul/li/a/span",
        account_login: ".menu_text",
        account_checkYourOrder: "//li[@class='dropdown open']//span[@class='menu_text'][normalize-space()='Check Your Order']",
        accountLoginDropdown: "//li[@class='dropdown open']//span[@class='menu_text'][normalize-space()='Login']",
        accountLogoutButton: "",
        cartLink: "ul#main_menu_top  .nobackground.top > .menu_text",
        checkoutLink: "a.menu_checkout.top",
        currencyDropdown: '[class="dropdown-toggle"][1]',
        accountLogoutLink: "//li[contains(@class,'open')]//span[contains(@class,'menu_text')][normalize-space()='Logout']",
        welcomeBackMsg: "//div[@class='menu_text']",
        errorMessage: "alert"
    }

    constructor(page: Page) {
        super(page);
        this.base = new PlaywrightWrapper(page);
    }

    async navigateToIndexPage() {
        await this.base.goto("https://automationteststore.com/")
    }

    async logoImage() {
        return this.page.locator(this.elements.logo)
    }

    async assertLogoImageIsDisplayed() {
        return this.page.locator(this.elements.logo).isVisible()
    }

    async tapOnLoginOrRegisterLink() {
        await this.waitForElementVisible(this.elements.loginOrRegisterLink)
        await this.page.click(this.elements.loginOrRegisterLink);
    }

    async loginOrRegister() {
        await this.waitForElementVisible(this.elements.loginOrRegisterLink)
        return pageFixture.page.locator(this.elements.loginOrRegisterLink)
    }

    async clickSpecialsLink() {
        await this.page.click(this.elements.specialsLink)
    }

    async clickAccountDropdownBtn() {
        await this.page.click(this.elements.accountLogoutButton)
    }

    async clickAccountLoginDropdownBtn() {
        await this.page.click(this.elements.accountLoginDropdown)
    }

    async clickAccountLogoutButton() {
        await this.page.locator(this.elements.accountLogoutButton).waitFor()
        await this.page.click(this.elements.accountLogoutButton)

    }

    async clickAccountCheckYourOrderDropdownBtn() {
        await this.waitForElementVisible(this.elements.account_checkYourOrder)
        await this.page.click(this.elements.account_checkYourOrder)


    }

    async clickCartLink() {
        await this.page.click(this.elements.cartLink)
    }

    async clickCheckoutLinkTxt() {
        await this.page.click(this.elements.checkoutLink)
    }


    async inputSearchBox(keyword: string) {
        await this.page.locator(this.elements.searchBox).fill(keyword);

    }

    async clickSearchBtn() {
        await this.page.locator(this.elements.searchIcon).check()
    }

    async welcomeBack() {
        return this.page.locator(this.elements.welcomeBackMsg)
    }

    async clickOnCurrencyDropdown() {
        await this.page.locator(this.elements.currencyDropdown).click()
    }

    async clickOnItemsCartDropdown() {
        await this.page.locator(this.elements.items).click()
    }

    async clickFacebookIcon() {
        await this.page.locator(this.elements.facebook).click()
    }

    async clickTwitterIcon() {
        await this.page.locator(this.elements.twitter).click()
    }

    async clickLinkedInIcon() {
        await this.page.locator(this.elements.linkedin).click()
    }

    async clickAccountLogoutLink() {
        await this.page.locator(this.elements.accountLogoutLink).click()
    }

    async clickAccountCheckYourOrderLink() {
        await this.page.locator(this.elements.account_checkYourOrder).click()
    }

    async clickHomeLink() {
        await this.page.locator(this.elements.home).click()
    }

    async clickApparelAccessoriesLink() {
        await this.page.locator(this.elements.apparelAccessories).click()
    }

    async clickMakeupLink() {
        await this.page.locator(this.elements.makeup).click()
    }

    async clickSkincareLink() {
        await this.page.locator(this.elements.skincare).click()
    }

    async clickFragranceLink() {
        await this.page.locator(this.elements.fragrance).click()
    }

    async clickMenLink() {
        await this.page.locator(this.elements.men).click()
    }

    async clickHaircareLink() {
        await this.page.locator(this.elements.haircare).click()
    }

    async clickBooksLink() {
        await this.page.locator(this.elements.books).click()
    }

    async subcategories() {
        return this.page.locator(this.elements.subcategories)
    }

}




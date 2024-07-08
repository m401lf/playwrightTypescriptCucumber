import {Locator, Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from "./BasePage";

const {faker} = require('@faker-js/faker/locale/en')


export class AccountEditPage extends BasePage {
    readonly page: Page;
    editInformationMenuTxt: Locator;
    myAccountInformationHeadingText: Locator;
    yourPersonalDetails: Locator;
    loginNameTxt: Locator;
    firstNameBox: Locator;
    lastNameBox: Locator;
    emailBox: Locator;
    telephoneBox: Locator;
    faxBox: Locator;
    continueEditBtn: Locator;
    backArrowBtn: Locator;
    userNameTxt: Locator;

    private base: PlaywrightWrapper

    constructor(page: Page) {
        super(page);
        this.page = page
        this.base = new PlaywrightWrapper(page);

        this.editInformationMenuTxt = page.locator('section > ul > li:nth-child(3) > a')
        this.myAccountInformationHeadingText = page.locator('div#maincontainer span.maintext')
        this.yourPersonalDetails = page.locator('form#AccountFrm > h4')
        this.loginNameTxt = page.locator('form#AccountFrm div:nth-child(1) > div')
        this.firstNameBox = page.locator('#AccountFrm_firstname')
        this.lastNameBox = page.locator('#AccountFrm_lastname')
        this.emailBox = page.locator('input#AccountFrm_email')
        this.telephoneBox = page.locator('input#AccountFrm_telephone')
        this.faxBox = page.locator('input#AccountFrm_fax')
        this.continueEditBtn = page.locator('form#AccountFrm button[type="submit"]')
        this.backArrowBtn = page.locator('form#AccountFrm a')
        this.userNameTxt = page.locator('fieldset > :nth-child(1) > .input-group')
    }

    async getEditInformationMenuTxt() {
        return await this.editInformationMenuTxt.textContent()
    }

    async getMyAccountInformationHeadingText() {
        return await this.myAccountInformationHeadingText.textContent()
    }

    async getYourPersonalDetails() {
        return await this.yourPersonalDetails.textContent()
    }

    async getUerNameTxt() {
        return await this.userNameTxt.textContent()
    }

    async getLoginNameTxt() {
        return await this.loginNameTxt.textContent()
    }

    async inputFirstNameBox(firstName) {
        await this.firstNameBox.fill(firstName)
    }

    async inputLastNameBox(lastName) {
        await this.lastNameBox.fill(lastName)
    }

    async inputEmailBox(email) {
        await this.emailBox.fill(email)
    }

    async inputTelephoneBox(telephone) {
        await this.telephoneBox.fill(telephone)
    }

    async inputFaxBox(fax) {
        await this.faxBox.fill(fax)
    }

    async clickContinueEditBtn() {
        await this.continueEditBtn.click()
    }

    async clickBackArrowBtn() {
        await this.backArrowBtn.click()
    }

    async enterGeneratedEmail() {
        return faker.internet.exampleEmail();
    }

}


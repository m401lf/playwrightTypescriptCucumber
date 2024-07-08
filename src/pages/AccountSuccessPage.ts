import {Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from "./BasePage";
import {pageFixture} from "../hooks/pageFixture";

export class AccountSuccessPage extends BasePage {

    private base: PlaywrightWrapper;
    private elements = {
        successSubMenu: '.breadcrumb > li:nth-of-type(3) > a',
        yourAccountHasBeenCreatedHeading: '.maintext',
        congratulationsYourAccountSuccessfullyCreated: '.mb40 > p:nth-of-type(2)',
        continueButton: '.mb40 > a[title="Continue"]',
    }

    constructor(page: Page) {
        super(page);
        this.base = new PlaywrightWrapper(page);
    }

    async successSubMenu() {
        await this.page.locator(this.elements.successSubMenu).waitFor()
        return this.page.locator(this.elements.successSubMenu)
    }

    async assertYourAccountHasBeenCreatedHeadingTextIsDisplayed() {
        await this.page.locator(this.elements.yourAccountHasBeenCreatedHeading).waitFor()
        return this.page.locator(this.elements.yourAccountHasBeenCreatedHeading).isVisible()
    }

    async yourAccountHasBeenCreated() {
        await this.page.locator(this.elements.yourAccountHasBeenCreatedHeading).waitFor()
        return this.page.locator(this.elements.yourAccountHasBeenCreatedHeading)
    }

    async assertCongratulationsYourAccountSuccessfullyCreatedTxtIsDisplayed() {
        await this.page.locator(this.elements.congratulationsYourAccountSuccessfullyCreated).waitFor()
        return this.page.locator(this.elements.congratulationsYourAccountSuccessfullyCreated).isVisible()
    }

    async congratulationsYourAccountSuccessfullyCreated() {
        await this.page.locator(this.elements.congratulationsYourAccountSuccessfullyCreated).waitFor()
        return this.page.locator(this.elements.congratulationsYourAccountSuccessfullyCreated)
    }

    async continueButton() {
        await this.page.locator(this.elements.continueButton).waitFor()
        return pageFixture.page.locator(this.elements.continueButton);
    }

    async clickOnContinueButton() {
        await this.page.locator(this.elements.continueButton).click({force: true})
    }

}


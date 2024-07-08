import {Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from "./BasePage";
import {pageFixture} from "../hooks/pageFixture";

export class AccountLogoutPage extends BasePage {

    private base: PlaywrightWrapper;
    private elements = {

        accountLogoutHeading: '.maintext',
        youhavebeenloggedoffyouraccount: '#maincontainer',
        continueButton: '.mb40 > .btn',

    }

    constructor(page: Page) {
        super(page);
        this.base = new PlaywrightWrapper(page);
    }

    async getAccountLogoutHeadingText() {
        await this.page.waitForSelector(this.elements.accountLogoutHeading)
        return await this.page.locator(this.elements.accountLogoutHeading).textContent()
    }

    async accountLogoutHeading() {
        await this.page.waitForSelector(this.elements.accountLogoutHeading)
        return this.page.locator(this.elements.accountLogoutHeading);
    }

    async youhavebeenloggedoffyouraccount() {
        await this.page.locator(this.elements.youhavebeenloggedoffyouraccount).waitFor()
        return this.page.locator(this.elements.youhavebeenloggedoffyouraccount)
    }

    async assertAccountLogoutHeadingIsDisplayed() {
        await this.page.locator(this.elements.accountLogoutHeading).waitFor()
        return this.page.locator(this.elements.accountLogoutHeading).isVisible()
    }

    async continueButton() {
        await this.page.locator(this.elements.continueButton).waitFor()
        return pageFixture.page.locator(this.elements.continueButton);

    }

    async clickOnContinueButton() {
        await this.page.waitForSelector(this.elements.continueButton)
        const continue_button = this.page.locator(this.elements.continueButton)
        await continue_button.click({force: true});


    }

    async assertContinueButtonIsDisplayed() {
        await this.page.waitForSelector(this.elements.continueButton)
        return this.page.locator(this.elements.continueButton).isVisible()
    }

    async assertLogoutHeadingIsDisplayed() {
        await this.page.waitForSelector(this.elements.accountLogoutHeading)
        return this.page.locator(this.elements.accountLogoutHeading).isVisible()
    }

}

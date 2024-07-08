import {Locator, Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from "./BasePage";

export class ButtonAndLinksClicksPage extends BasePage {
    readonly page: Page;
    readonly registerSubMenuTxt: Locator;
    readonly continue_Button: Locator;
    readonly continueBtn: Locator;
    readonly contBtn: Locator;

    private base: PlaywrightWrapper;

    constructor(page: Page) {
        super(page);
        this.page = page
        this.base = new PlaywrightWrapper(page);


        this.registerSubMenuTxt = page.locator('.breadcrumb > li:nth-of-type(3) > a')
        this.continue_Button = page.getByRole('button', {name: 'Continue'})
        this.continueBtn = page.locator('text = Continue')
        this.contBtn = page.locator('button:has-text("Continue")')

    }

    async ClickOnContinue_Button() {
        await this.continue_Button.click({force: true})
    }

    async ClickOnContinueBtn() {
        await this.continueBtn.click({force: true})
    }

    async ClickOnContBtn() {
        await this.contBtn.click({force: true})

    }


}

module.exports = {ButtonAndLinksClicksPage}

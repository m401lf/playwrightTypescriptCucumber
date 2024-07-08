import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";


export class ContactUsSuccessPage extends BasePage {
    readonly page: Page;
    private readonly contactusSubMenu: Locator;
    private readonly header: Locator;
    private readonly successfulSubmissionMsgTxt: Locator;
    private readonly continueButton: Locator;


    private base: PlaywrightWrapper;

    constructor(page: Page) {
        super(page);
        this.page = page
        this.base = new PlaywrightWrapper(page);

        this.contactusSubMenu = page.locator('.breadcrumb > li:nth-of-type(2) > a')
        this.header = page.locator('span.maintext')
        this.successfulSubmissionMsgTxt = page.locator('.mb40 p:nth-child(3)')
        this.continueButton = page.locator('[title="Continue"]')
    }

    async assertBreadcrumbSubMenu() {
        return await this.contactusSubMenu.isVisible()
    }

    async assertHeader() {
        return await this.header.isVisible()
    }

    async assertSuccessfulSubmissionMsg() {
        return await this.successfulSubmissionMsgTxt.isVisible()
    }

    async clickOnContinueBtn() {
        await this.page.locator('.mb40 > a[title=\'Continue\']').click()
    }

}

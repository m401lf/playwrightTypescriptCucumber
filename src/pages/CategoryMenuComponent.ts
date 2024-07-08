import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export class CategoryMenuComponent extends BasePage {
    readonly page: Page;
    private readonly registerSubMenuTxt: Locator;

    private base: PlaywrightWrapper;

    constructor(page: Page) {
        super(page);
        this.page = page
        this.base = new PlaywrightWrapper(page);

        // Locate the Register Submenu text
        this.registerSubMenuTxt = page.locator('.breadcrumb > li:nth-of-type(3) > a')

    }

    async openSubMenu() {
        await this.registerSubMenuTxt.click()
    }


}

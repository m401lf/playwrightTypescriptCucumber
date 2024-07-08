import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export class SearchResultPage extends BasePage {
    readonly page: Page;
    readonly registerSubMenuTxt: Locator;

    private base: PlaywrightWrapper;

    constructor(page: Page) {
        super(page);
        this.page = page
        this.base = new PlaywrightWrapper(page);

        this.registerSubMenuTxt = page.locator('.breadcrumb > li:nth-of-type(3) > a')

    }
}

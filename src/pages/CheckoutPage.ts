import {Locator, Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from "./BasePage";

export class CheckoutPage extends BasePage {

    private readonly registerSubMenuTxt: Locator;

    private base: PlaywrightWrapper;

    constructor(page: Page) {
        super(page);
        this.base = new PlaywrightWrapper(page);

        this.page = page
        this.registerSubMenuTxt = page.locator('.breadcrumb > li:nth-of-type(3) > a')

    }
}

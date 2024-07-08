import {Locator, Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from "./BasePage";

const {faker} = require('@faker-js/faker/locale/en')

export class ProductIDPage extends BasePage {

    registerSubMenuTxt: Locator;

    private base: PlaywrightWrapper

    constructor(page: Page) {
        super(page);
        this.page = page
        this.base = new PlaywrightWrapper(page)

        this.registerSubMenuTxt = page.locator('.breadcrumb > li:nth-of-type(3) > a')

    }

}

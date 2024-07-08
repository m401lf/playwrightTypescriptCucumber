/* eslint-disable prettier/prettier */

import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export class CheckoutConfirmationPage extends BasePage {
    readonly page: Page;
    private readonly confirmOrderTxt: Locator
    private readonly continueShoppingLink: Locator
    private readonly registerSubMenuTxt: Locator

    private base: PlaywrightWrapper

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.base = new PlaywrightWrapper(page);

        // Locators
        this.confirmOrderTxt = page.locator('[class="confirm-order"]');
        this.continueShoppingLink = page.locator('[class="continue-shopping"]');
        this.registerSubMenuTxt = page.locator('[class="register-sub-menu"]');

    }

}

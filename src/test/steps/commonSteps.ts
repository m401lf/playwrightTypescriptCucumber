import {Given} from '@cucumber/cucumber';
import {expect} from "@playwright/test";
import {pageFixture} from '../../hooks/pageFixture';
import Assert from "../../helper/wrapper/assert";
import {POManager} from '../../pages/POManager';

let assert: Assert;

Given('I am an Ecommerce home Page', async function () {
    this.poManager = new POManager(pageFixture.page);
    this.topNaviPage = this.poManager.getTopNaviPage();
    await this.topNaviPage.navigateToIndexPage();
});


Given('I navigate to login page', async function () {
    this.poManager = new POManager(pageFixture.page);
    this.topNaviPage = this.poManager.getTopNaviPage();
    await this.topNaviPage.tapOnLoginOrRegisterLink();
});

Given('I tap on {string} link', async function (loginOrRegisterLink: string) {
    this.poManager = new POManager(pageFixture.page);
    this.topNaviPage = this.poManager.getTopNaviPage();
    await expect(await this.topNaviPage.loginOrRegister()).toContainText(loginOrRegisterLink);
    await this.topNaviPage.tapOnLoginOrRegisterLink();
});

Given('I can see page url contains {string} and title {string}', async function (url: string, title: string) {
    await pageFixture.page.waitForLoadState();
    assert = new Assert(pageFixture.page);
    await assert.assertURLContains(url);
    await assert.assertTitleContains(title);
    pageFixture.logger.info("Page URL contains :: " + url);
    pageFixture.logger.info("Page Title contains :: " + title);
});

Given('I can see {string} text is displayed', async function (text: string) {
    this.registerPage = this.poManager.getRegisterPage();
    const selector_text = pageFixture.page.locator("//h4[normalize-space()='" + text + "']");
    await expect(selector_text).toContainText(text);

});

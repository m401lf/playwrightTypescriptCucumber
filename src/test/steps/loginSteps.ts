import {DataTable, Given, Then, When} from '@cucumber/cucumber';
import {expect} from "@playwright/test";
import {pageFixture} from '../../hooks/pageFixture';
import Assert from "../../helper/wrapper/assert";
import {POManager} from '../../pages/POManager';
import {faker} from '@faker-js/faker';

let assert: Assert;

Given('I navigate to register page',
    async function () {
        this.poManager = new POManager(pageFixture.page);
        this.loginPage = this.poManager.getAccountLoginPage();
        await this.loginPage.clickContinueButton();
    });

Given('I Continue', async function () {
    this.poManager = new POManager(pageFixture.page);
    this.loginPage = this.poManager.getAccountLoginPage();
    await this.loginPage.clickContinueButton();
});

Given('I {string}', async function (contBtn:string) {
    this.poManager = new POManager(pageFixture.page);
    this.loginPage = this.poManager.getAccountLoginPage();
    await expect(await this.loginPage.continueButton()).toContainText(contBtn);
    await this.loginPage.clickContinueButton();
});

Given('I can see {string} and {string} sub headings texts', async function (returningCustomer: string, newCustomer: string) {
    assert = new Assert(pageFixture.page);
    this.poManager = new POManager(pageFixture.page);
    this.loginPage = this.poManager.getAccountLoginPage();

    const returning_Customer = await this.loginPage.returningCustomer();
    await expect(returning_Customer).toContainText(returningCustomer);

    const new_customer = await this.loginPage.newCustomer();
    await expect(new_customer).toContainText(newCustomer);

});

When('I login in login page {string} and {string}', async function (loginName: string, password: string) {
    this.loginPage = this.poManager.getAccountLoginPage();
    await this.loginPage.inputLoginName(loginName);
    await this.loginPage.inputPassword(password);
    await this.loginPage.clickLoginButton()

});

When('I login in login page as a returning customer with', async function (loginName: string, password: string) {
    this.loginPage = this.poManager.getAccountLoginPage();
    await this.loginPage.login(loginName, password);
    await this.loginPage.clickContinueButton();

});

When('I should be presented with welcome message {string}', async function (loginValidationMessage: string) {
    this.accountPage = this.poManager.getAccountPage();
    const selector = await this.accountPage.userProfileWelcomeMessage();
    await expect(selector).toContainText(loginValidationMessage);
});

Then('should be presented with the following Error validation message as {string}', async function (loginValidationErrorMessage: string) {
    this.loginPage = this.poManager.getAccountLoginPage();
    const selector = await this.loginPage.alertErrorLoginMessage();
    await expect(selector).toContainText(loginValidationErrorMessage);
});

When('Enter invalid login name and password', async function () {
    const loginName = faker.internet.email();
    const password = faker.internet.password();
    this.loginPage = this.poManager.getAccountLoginPage();
    await this.loginPage.inputLoginName(loginName);
    await this.loginPage.inputPassword(password);
    await this.loginPage.clickOnLoginBtn();

});

Given('I enter login name and password in login page as a returning customer with:', async function (dataTable: DataTable) {
    const data = dataTable.hashes();
    const loginName = data[0].loginName;
    const password = data[0].password;
    this.loginPage = this.poManager.getAccountLoginPage();
    await this.loginPage.inputLoginName(loginName);
    await this.loginPage.inputPassword(password);
});

Given('I login in the login page as a returning customer:', async function (dataTable: DataTable) {
    const data = dataTable.hashes();
    const loginName = data[0].loginName;
    const password = data[0].password;
    this.loginPage = this.poManager.getAccountLoginPage();
    await this.loginPage.inputLoginName(loginName);
    await this.loginPage.inputPassword(password);
    await this.loginPage.clickLoginButton();
});
Given('I click on login button', async function () {
    this.loginPage = this.poManager.getAccountLoginPage();
    await this.loginPage.clickLoginButton();

});
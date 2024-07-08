import {Given, Then} from '@cucumber/cucumber';
import {expect} from "@playwright/test";
import {pageFixture} from '../../hooks/pageFixture';
import Assert from "../../helper/wrapper/assert";
import {POManager} from '../../pages/POManager';
import {faker} from '@faker-js/faker';

let assert: Assert;


Given('I can see {string} section label', async function (perDetails: string) {
    this.poManager = new POManager(pageFixture.page);
    this.registerPage = this.poManager.getRegisterPage();
    const selector = await pageFixture.page.locator("h4:nth-child(4)");
    console.log(selector.textContent());
    await expect(selector).toContainText(perDetails);

});

Given('I can see {string} section', async function (sectionName: string) {
    this.registerPage = this.poManager.getRegisterPage();
    //const selector = await pageFixture.page.locator("h4:nth-child(4)");
    //const selector = pageFixture.page.locator("//h4[normalize-space()='" + sectionName + "']");
    const selector = await this.registerPage.yourPersonalDetails(sectionName);
    await expect(selector).toContainText(sectionName);

});

Given('I input firstName {string}', async function (firstName: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputFirstNameBox(firstName)
});

Given('I input lastName {string}', async function (lastName: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputLastNameBox(lastName)

});

Given('I input unique email', async function () {
    this.registerPage = this.poManager.getRegisterPage();
    //await this.registerPage.inputUniqueEmail(emailAddress)
    await this.registerPage.inputUniqueEmail(faker.internet.email())
});

Given('I input telephone {string}', async function (telephone: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputTelephoneBox(telephone)

});

Given('I input fax {string}', async function (fax: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputFaxBox(fax)

});

Given('I see {string} sections', async function (yourAddr: string) {
    this.registerPage = this.poManager.getRegisterPage();
    expect(this.registerPage.getYourAddressSection().toContainText(yourAddr));

});

Given('I input company {string}', async function (companyName: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputCompanyNameBox(companyName)

});

Given('I input Address one {string}', async function (addr1: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputAddress1Box(addr1)

});

Given('I input Address two {string}', async function (addr2: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputAddress2Box(addr2)

});

Given('I input city {string}', async function (city: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputCityBox(city)

});

Given('I select province or state {string}', async function (zoneOrProvince: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.selectZoneOrProvince(zoneOrProvince)

});

Given('I input postcode {string}', async function (postCode: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputPostcodeBox(postCode)

});

Given('I select {string} as country', async function (country: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.selectCountry(country)

});

Given('I can see {string} section is displayed', async function (loginDetails: string) {
    this.registerPage = this.poManager.getRegisterPage();
    expect(this.registerPage.getLoginDetailsSection().toContain(loginDetails));

});

Given('I input unique loginname', async function () {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputUniqueLoginName(faker.internet.userName())


});

Given('I input password {string}', async function (password: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputPasswordBox(password)

});

Given('I input confirm password {string}', async function (conPassword: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.inputConfirmPasswordBox(conPassword)

});

Given('I see {string} input sections label', async function (newsletter: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.getNewsletterSection();

});

Given('tick subscription option Yes', async function () {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.tickSubscribeYesRadioButton();

});

Given('tick subscription option {string}', async function (yes: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await expect(await this.registerPage.subscribeRadioButtonYesLabel()).toContainText(yes);
    await this.registerPage.tickSubscribeYesRadioButton();

});

Given('I tick Privacy Policy radio button', async function () {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.clickIAgreeToPrivacyPolicyButton();

});

Given('I tick {string} radio button', async function (privacyPolicyText: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await expect(await this.registerPage.privacyPolicyLinkText()).toContainText(privacyPolicyText);
    await this.registerPage.clickIAgreeToPrivacyPolicyButton();

});

Given('I tap Continue button', async function () {
    this.registerPage = this.poManager.getRegisterPage();
    await this.registerPage.clickOnContinueButton();

});

Given('I tap {string} button', async function (continueButton: string) {
    this.registerPage = this.poManager.getRegisterPage();
    await expect(await this.registerPage.continueButton()).toContainText(continueButton)
    await this.registerPage.clickOnContinueButton();

});

Then('I should see {string} in the Account success page', async function (successMsg: string) {
    this.successPage = this.poManager.getSuccessPage();
    await assert.assertTitleContains(successMsg);

});

Then('I tap Continue button in Account success page', {timeout: 5000}, async function () {
    this.successPage = this.poManager.getSuccessPage();
    await this.successPage.clickOnContinueButton();
});

Then('I tap {string} button in Account success page', async function (continueButton:string) {
    this.successPage = this.poManager.getSuccessPage();
    await expect(await this.successPage.continueButton()).toContainText(continueButton);
    await this.successPage.clickOnContinueButton();
});





Then('I can see {string} and {string} message in the account page', async function (dashboard: string, welcomeMsg: string) {
    this.accountPage = this.poManager.getAccountPage();
    await expect(await this.accountPage.accountDashboard()).toContainText(dashboard);
    await expect(await this.accountPage.userProfileWelcomeMessage()).toContainText(welcomeMsg);

});


Then('I tap on Logoff icon', async function () {
    this.accountPage = this.poManager.getAccountPage();
    await this.accountPage.clickLogoffIcon();

});

Then('I tap on {string} icon in the Aside Widget', async function (logoff: string) {
    this.accountPage = this.poManager.getAccountPage();
    await expect(await this.accountPage.Logoff()).toContainText(logoff);
    await this.accountPage.clickLogoffAsideWidget();

});


Then('I can see {string} header text', async function (accountLogout: string) {
    this.logoutPage = this.poManager.getLogoutPage();
    await expect(await this.logoutPage.accountLogoutHeading()).toContainText(accountLogout);

});

Then('I click the Continue button', async function () {
    this.logoutPage = this.poManager.getLogoutPage();
    await expect(await this.logoutPage.continueButton()).toContainText("Continue");
    await this.logoutPage.clickOnContinueButton();

});

Then('I click the {string} button', async function (continueButtonText: string) {
    this.logoutPage = this.poManager.getLogoutPage();
    await expect(await this.logoutPage.continueButton()).toContainText(continueButtonText);
    await this.logoutPage.clickOnContinueButton();

});

Given('click on Continue button', async function () {
    this.logoutPage = this.poManager.getLogoutPage();
    await this.logoutPage.clickOnContinueButton();
});


Given('I can see page url contains and title below:', async function (DataTables: any) {
    let pageUrl = DataTables.page[1].data[0];
    let pageTitle = DataTables.page[1].data[1];
    await assert.assertURLContains(pageUrl);
    await assert.assertTitleContains(pageTitle);
    pageFixture.logger.info("Page URL contains :: " + pageUrl);
    pageFixture.logger.info("Page Title contains :: " + pageTitle);

});
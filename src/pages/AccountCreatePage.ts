import {Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from "./BasePage";
import {pageFixture} from '../hooks/pageFixture';

const username = +"login_" + Date.now().toString();
const email = +"email_" + Date.now().toString();

export class AccountCreatePage extends BasePage {
    elements = {
//**************Your Personal Details**************//
        registerForm: "Locator',('#maincontainer > .container-fluid",
        createAccount: '.maintext"',
        ifYouAlreadyHaveAnAccLink: 'form#AccountFrm > p',
        loginPageLink: "//?/a[@innertext='login page']",
        yourPersonalDetailsTxt: 'form#AccountFrm > h4:nth-of-type(1)',
        yourPersonalDetails: 'h4:nth-child(4)',
        firstNameBox: 'input#AccountFrm_firstname',
        lastNameBox: 'input#AccountFrm_lastname',
        emailBox: '#AccountFrm_email',
        telephoneBox: '#AccountFrm_telephone',
        faxBox: '#AccountFrm_fax',
        //**************Your Address*****************//
        yourAddress: 'form#AccountFrm > h4:nth-of-type(2)',
        companyNameBox: 'input#AccountFrm_company',
        address1Box: 'input[name="address_1"]',
        address2Box: 'input[name="address_2"]',
        cityBox: 'input#AccountFrm_city',
        regionStateDropdownBtn: 'select#AccountFrm_zone_id',
        zipCodeBox: 'input#AccountFrm_postcode',
        countryDropdownBtn: 'select#AccountFrm_country_id',
        //*******Login Details*****************//
        loginDetail: 'form#AccountFrm > h4:nth-of-type(3)',
        loginNameBox: 'input#AccountFrm_loginname',
        passwordBox: 'input#AccountFrm_password',
        confirmPasswordBox: 'input#AccountFrm_confirm',
        //*******Newsletter*****************//
        newsletter: 'form#AccountFrm > h4:nth-of-type(4)',
        subscribeYesRadioBtn: '#AccountFrm_newsletter1',
        subscribeRadioBtnYesLabel: "label[for='AccountFrm_newsletter1']",
        subscribeRadioBtnYes: '.col-sm-4.input-group > label:nth-of-type(1)',
        subscribeNoRadioBtn: '#AccountFrm_newsletter0',
        iAgreeToPrivacyPolicyCheckbox: '#AccountFrm_agree',
        privacyPolicyText: ".col-md-6.mb40.mt20  b",
        iAgreeToPrivacyPolicyText: "label[class='col-md-6 mt20 mb40'] a b",
        continueBtn: 'button[title="Continue"]:visible',
        continueButton: 'button[title="Continue"]:visible',

    }
    private base: PlaywrightWrapper

    constructor(page: Page) {
        super(page);
        this.base = new PlaywrightWrapper(page);
    }

    async getCreateAccountText() {
        return await this.page.locator(this.elements.createAccount).textContent();
    }

    async createAccount() {
        await this.page.locator(this.elements.createAccount).waitFor();
        return this.page.locator(this.elements.createAccount);
    }

    async loginPageLink() {
        await this.page.locator(this.elements.loginPageLink).waitFor();
        return this.page.locator(this.elements.loginPageLink);
    }

    async clickLoginPageLink() {
        await this.page.locator(this.elements.loginPageLink).waitFor();
        return this.page.locator(this.elements.loginPageLink);
    }

    async assertRegistrationFormIsVisible() {
        await this.page.locator(this.elements.registerForm).waitFor();
        return this.page.locator(this.elements.registerForm).isVisible();
    }


    //**************Your Personal Details**************//

    async assertYourPersonalDetailsTextIsVisible() {
        await this.page.locator(this.elements.yourPersonalDetailsTxt).waitFor();
        return await this.page.locator(this.elements.yourPersonalDetailsTxt).isVisible();
    }

    async yourPersonalDetails(sectionName: string) {
        return pageFixture.page.locator("//h4[normalize-space()='" + sectionName + "']");
    }

    async continueButton() {
        return pageFixture.page.locator("button[title='Continue']:visible");
    }

    async getYourPersonalDetailsText() {
        return await this.page.locator(this.elements.yourPersonalDetailsTxt).textContent();
    }

    async inputFirstNameBox(firstName: string) {
        await this.page.locator(this.elements.firstNameBox).fill(firstName)
    }

    async inputLastNameBox(lastName: string) {
        await this.page.locator(this.elements.lastNameBox).fill(lastName);
    }

    async inputUniqueEmail(email: string) {
        await this.page.locator(this.elements.emailBox).waitFor();
        await this.page.locator(this.elements.emailBox).fill(email);
    }

    async inputTelephoneBox(telephone: string) {
        await this.page.locator(this.elements.telephoneBox).waitFor();
        await this.page.locator(this.elements.telephoneBox).fill(telephone);
    }

    async inputFaxBox(fax: string) {
        await this.page.locator(this.elements.faxBox).waitFor();
        await this.page.locator(this.elements.faxBox).fill(fax);
    }

    //**************Your Address*****************//

    async getYourAddressSection() {
        await this.page.locator(this.elements.yourAddress).waitFor();
        return await this.page.locator(this.elements.yourAddress).textContent();
    }

    async assertYourAddressSectionTextIsDisplayed() {
        await this.page.locator(this.elements.yourAddress).waitFor();
        return await this.page.locator(this.elements.yourAddress).isVisible();
    }

    async yourAddress() {
        await this.page.locator(this.elements.yourAddress).waitFor();
        return this.page.locator(this.elements.yourAddress);
    }

    async inputCompanyNameBox(coyName: string) {
        await this.page.locator(this.elements.companyNameBox).waitFor();
        await this.page.locator(this.elements.companyNameBox).fill(coyName);
    }

    async inputAddress1Box(add1: string) {
        await this.page.locator(this.elements.address1Box).waitFor();
        await this.page.locator(this.elements.address1Box).fill(add1);
    }

    async inputAddress2Box(add2: string) {
        await this.page.locator(this.elements.address2Box).waitFor();
        await this.page.locator(this.elements.address2Box).fill(add2);
    }

    async inputCityBox(city: string) {
        await this.page.locator(this.elements.cityBox).waitFor();
        await this.page.locator(this.elements.cityBox).fill(city);
    }

    async selectZoneOrProvince(regionOrState: string) {
        await this.page.locator(this.elements.regionStateDropdownBtn).waitFor();
        await this.page.locator(this.elements.regionStateDropdownBtn).selectOption(regionOrState);
    }

    async inputPostcodeBox(postcode: string) {
        await this.page.locator(this.elements.zipCodeBox).waitFor();
        await this.page.locator(this.elements.zipCodeBox).fill(postcode);
    }

    async selectCountry(country: string) {
        await this.page.locator(this.elements.countryDropdownBtn).waitFor();
        await this.page.locator(this.elements.countryDropdownBtn).selectOption(country);
    }

    async assertCountrySelected(country: string) {
        await this.page.locator(this.elements.countryDropdownBtn).waitFor();
        return this.page.locator(this.elements.countryDropdownBtn).selectOption(country);
    }

    //*******Login Details*****************//

    async getLoginDetailsSection() {
        await this.page.locator(this.elements.loginDetail).waitFor();
        return this.page.locator(this.elements.loginDetail).textContent();
    }

    async assertLoginDetailsIsDisplayed() {
        await this.page.locator(this.elements.countryDropdownBtn).waitFor();
        return await this.page.locator(this.elements.countryDropdownBtn).isVisible();
    }

    async inputUniqueLoginName(loginname: string) {
        await this.page.locator(this.elements.loginNameBox).waitFor();
        await this.page.locator(this.elements.loginNameBox).fill(loginname);
    }

    async inputPasswordBox(password: string) {
        await this.page.locator(this.elements.passwordBox).waitFor();
        await this.page.locator(this.elements.passwordBox).fill(password);
    }

    async inputConfirmPasswordBox(password: string) {
        await this.page.locator(this.elements.confirmPasswordBox).waitFor();
        await this.page.locator(this.elements.confirmPasswordBox).fill(password);
    }

    //*******Newsletter*****************//

    async newsletter() {
        await this.page.locator(this.elements.newsletter).waitFor();
        return this.page.locator(this.elements.newsletter);
    }

    async getNewsletterSection() {
        await this.page.locator(this.elements.newsletter).waitFor();
        return await this.page.locator(this.elements.newsletter).textContent();
    }

    async subscribeRadioButtonYes() {
        await this.page.locator(this.elements.subscribeRadioBtnYes).waitFor();
        await this.page.locator(this.elements.subscribeRadioBtnYes);
    }

    async tickSubscribeYesRadioButton() {
        await this.page.locator(this.elements.subscribeYesRadioBtn).waitFor();
        await this.page.locator(this.elements.subscribeYesRadioBtn).check({force: true});
    }
    async assertSubscribeYesRadioButtonIsChecked() {
        await this.page.locator(this.elements.subscribeYesRadioBtn).waitFor();
        return await this.page.locator(this.elements.subscribeYesRadioBtn).isChecked();
    }

    async subscribeRadioButtonYesLabel() {
        await this.page.locator(this.elements.subscribeRadioBtnYesLabel).waitFor();
        return pageFixture.page.locator(this.elements.subscribeRadioBtnYesLabel.trim());
    }

    async tickSubscribeNoRadioButton() {
        await this.page.locator(this.elements.subscribeNoRadioBtn).waitFor();
        await this.page.locator(this.elements.subscribeNoRadioBtn).check({force: true});
    }

    async clickIAgreeToPrivacyPolicyButton() {
        const iAgreePPolicy = await this.page.locator(this.elements.iAgreeToPrivacyPolicyCheckbox);
        await iAgreePPolicy.waitFor();
        await iAgreePPolicy.click({force: true});
    }

    async iAgreeToPrivacyPolicyLink() {
        await this.page.locator(this.elements.iAgreeToPrivacyPolicyText).waitFor();
        return this.page.locator(this.elements.iAgreeToPrivacyPolicyText);
    }

    async privacyPolicyLinkText() {
        await this.page.locator(this.elements.iAgreeToPrivacyPolicyText).waitFor();
        return pageFixture.page.locator(this.elements.privacyPolicyText);
    }

    async assertIAgreeToPrivacyPolicyCheckboxIsDisplayed() {
        await this.page.locator(this.elements.iAgreeToPrivacyPolicyCheckbox).waitFor();
        return await this.page.locator(this.elements.iAgreeToPrivacyPolicyCheckbox).isVisible();
    }

    async clickOnContinueButton() {
        await this.page.locator(this.elements.continueButton).waitFor();
        await this.page.locator(this.elements.continueButton).click({force: true});
    }

}

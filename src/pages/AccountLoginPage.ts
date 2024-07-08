import {Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {pageFixture} from "../hooks/pageFixture";
import {BasePage} from "./BasePage";

export class AccountLoginPage extends BasePage {

    elements = {
        accountLoginTxt: '.maintext',
        newCustomerTxt: ".col-sm-6.newcustomer > .heading2",
        returningCustomerTxt: ".col-sm-6.returncustomer > .heading2",
        loginNameInput: '#loginFrm_loginname',
        passwordInput: '#loginFrm_password',
        registerAccountCheckBox: '#accountFrm_accountregister',
        registerAccountText: 'form#accountFrm label',
        loginBtn: "//button[normalize-space()='Login']",
        loginBlueMenu: '.breadcrumb > li:nth-of-type(3) > a',
        newcustomerForm: '.col-sm-6.returncustomer',
        byCreatingAnAccountTxt: '.form-group.mb40.mt20',
        continueBtn: "button[title='Continue']",
        continueButton: "//button[normalize-space()='Continue']",
        forgotYourPasswordLink: "//a[contains(text(),'Forgot your password?')]",
        forgotYourLoginLink: "//a[contains(text(),'Forgot your login?')]",
        alertErrorLoginMsg: '.alert.alert-error.alert-danger',

    }
    private base: PlaywrightWrapper;

    constructor(page: Page) {
        super(page);
        this.base = new PlaywrightWrapper(page);
    }

    async loginBlueMenu() {
        await this.page.locator(this.elements.accountLoginTxt).waitFor()
        return this.page.locator(this.elements.loginBlueMenu);
    }

    async accountLogin() {
        await this.page.locator(this.elements.accountLoginTxt).waitFor()
        return this.page.locator(this.elements.accountLoginTxt);
    }


    async assertAccountLoginTextIsDisplayed() {
        await this.page.locator(this.elements.accountLoginTxt).waitFor()
        return this.page.locator(this.elements.accountLoginTxt).isVisible();
    }

    async assertNewCustomerTextIsDisplayed() {
        await this.page.locator(this.elements.newCustomerTxt).waitFor()
        return this.page.locator(this.elements.newCustomerTxt).isVisible();
    }

    async newCustomer() {
        await this.page.locator(this.elements.newCustomerTxt).waitFor()
        return pageFixture.page.locator(this.elements.newCustomerTxt)
    }

    async returningCustomer() {
        await this.page.locator(this.elements.returningCustomerTxt).waitFor()
        return pageFixture.page.locator(this.elements.returningCustomerTxt)
    }

    async assertReturningCustomerTextIsDisplayed() {
        return this.page.locator(this.elements.returningCustomerTxt).isVisible();
    }


    async registerAccount() {
        return this.page.locator(this.elements.registerAccountText)
    }

    async assertRegisterAccCheckBoxIsChecked() {
        await this.page.locator(this.elements.registerAccountCheckBox).waitFor()
        return this.page.locator(this.elements.registerAccountCheckBox).isChecked()
    }

    async registerAccountCheckBox() {
        await this.page.locator(this.elements.registerAccountCheckBox).waitFor()
        return this.page.locator(this.elements.registerAccountCheckBox)
    }

    async clickContinueButton() {
        await this.page.waitForSelector(this.elements.continueBtn)
        await this.page.locator(this.elements.continueBtn).click({force: true})
    }

    async continueButton() {
        await this.waitForElementVisible(this.elements.continueBtn)
        return pageFixture.page.locator(this.elements.continueButton)
    }

    async tapOnForgotYourPasswordLink() {
        await this.page.locator(this.elements.forgotYourPasswordLink).waitFor()
        await this.page.locator(this.elements.forgotYourPasswordLink).click({force: true})
    }

    async forgotYourPasswordLink() {
        await this.page.locator(this.elements.forgotYourPasswordLink).waitFor()
        return this.page.locator(this.elements.forgotYourPasswordLink)
    }

    async forgotYourLoginLink() {
        await this.page.locator(this.elements.forgotYourLoginLink).waitFor()
        return this.page.locator(this.elements.forgotYourLoginLink)
    }

    async tapOnForgotYourLoginLink() {
        await this.page.locator(this.elements.forgotYourLoginLink).waitFor()
        await this.page.locator(this.elements.forgotYourLoginLink).click({force: true})
    }


    async alertErrorLoginMessage() {
        await this.page.locator(this.elements.alertErrorLoginMsg).waitFor()
        return pageFixture.page.locator(this.elements.alertErrorLoginMsg)
    }

    async assertLoginErrorWarningMessageIsDisplayed() {
        await this.page.locator(this.elements.alertErrorLoginMsg).waitFor()
        return this.page.locator(this.elements.alertErrorLoginMsg)
    }

    async inputLoginName(loginName: string) {
        await this.page.locator(this.elements.loginNameInput).fill(loginName)
    }

    async inputPassword(password: string) {
        await this.page.locator(this.elements.passwordInput).fill(password)
    }

    async clickLoginButton() {
        await this.page.locator(this.elements.loginBtn).waitFor()
        await this.page.locator(this.elements.loginBtn).click({force: true})
    }

    async login(loginName: string, password: string) {
        await this.inputLoginName(loginName)
        await this.inputPassword(password)
        await this.clickLoginButton();
    }


}

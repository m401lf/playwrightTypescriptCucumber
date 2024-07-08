import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";

const {faker} = require('@faker-js/faker/locale/en')

export class ContactUsPage extends BasePage {
    readonly page: Page;
    private readonly registerSubMenuTxt: Locator;
    private readonly header: Locator;
    private readonly addr: Locator;
    private readonly tel: Locator;
    private readonly contForm: Locator;
    private readonly firstnameBox: Locator;
    private readonly emailAddrBox: Locator;
    private readonly msgBox: Locator;
    private readonly resetButton: Locator;
    private readonly submitButton: Locator;
    private readonly firstnameErrorMsg: Locator;
    private readonly emailErrorMsg: Locator;
    private readonly inquiryErrorMsg: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page
        this.registerSubMenuTxt = page.locator('.breadcrumb > li:nth-of-type(3) > a')
        this.header = page.locator('.maintext')
        this.addr = page.locator('div.col-md-6.pull-left')
        this.tel = page.locator('div.col-md-6.pull-right')
        this.contForm = page.locator('#ContactUsFrm')
        this.firstnameBox = page.locator('input#ContactUsFrm_first_name')
        this.emailAddrBox = page.locator('input#ContactUsFrm_email')
        this.msgBox = page.locator('textarea#ContactUsFrm_enquiry')
        this.resetButton = page.locator('button.btn.btn-default.pull-left')
        this.submitButton = page.locator('button[title="Submit"]')
        this.firstnameErrorMsg = page.locator('#field_11 > .help-block > .element_error')
        this.emailErrorMsg = page.locator('#field_12 > .help-block > .element_error')
        this.inquiryErrorMsg = page.locator('#field_13 > .help-block > .element_error')

    }

    async assertContactUsHeadingText() {
        return await this.header.isVisible()
    }

    async assertAddressText() {
        return await this.addr.isVisible()
    }

    async assertTelephone() {
        return await this.tel.isVisible()
    }

    async assertContactUsFormTxt() {
        return await this.contForm.textContent()
    }

    async clickResetBtn() {
        await this.resetButton.click()
    }

    async assertResetButton() {
        return await this.resetButton.isVisible()
    }


    async getFirstNameErrorWarningMsg() {
        return await this.firstnameErrorMsg.textContent()

    }

    async getEmailErrorWarningMsg() {
        return await this.emailErrorMsg.textContent()
    }

    async inquiryErrorWarningMsg() {
        return await this.inquiryErrorMsg.textContent()
    }

    async inputFirstname(firstName) {
        await this.firstnameBox.fill(firstName)
    }


    async inputEmailBox(email) {
        await this.emailAddrBox.fill(email)
    }

    async inputInquiryMsgBox(inquiryMsg) {
        await this.msgBox.fill(inquiryMsg)
    }

    async clickOnSubmitBtn() {
        await this.submitButton.click({force: true})
    }

    async submitContactUsForm(firstName, email, inquiryMsg) {
        await this.inputFirstname(firstName)
        await this.inputEmailBox(email)
        await this.inputInquiryMsgBox(inquiryMsg)
        await this.clickOnSubmitBtn()
    }


}
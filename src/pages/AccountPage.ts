import {Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from "./BasePage";
import {pageFixture} from "../hooks/pageFixture";

export class AccountPage extends BasePage {

    private elements = {
        welcomeUserProfile: '#customer_menu_top > :nth-child(1) > .top > .menu_text',
        myAccountTxt: 'div#maincontainer h1',
        editAccountDetailsLink: '.side_account_list > li:nth-of-type(3) > a',
        accountDashboardTxt: 'div#maincontainer li.selected > a',
        yourAccountSuccessfullyUpdatedTxt: '.alert.alert-success',
        editAccountDetailsImage: 'div#maincontainer div.col-md-9.col-xs-12.mt20 > div > ul > li:nth-child(1) > a > i',
        changePasswordImageLink: '.nav-dash .fa-star',
        manageAddressBookImageLink: '.nav-dash .fa-booka',
        myWistListImageLink: '.nav-dash .fa-star',
        orderHistoryLink: 'li:nth-of-type(5) > a > .fa.fa-briefcase',
        transactionHistoryLink: 'li:nth-of-type(6) > a > .fa.fa-money',
        downloadLink: '.nav-dash .fa-cloud-download',
        notificationLink: '.nav-dash .fa-bullhorn',
        logoffIcon: '.fa-unlock',
        logoffLink: '.side_account_list > li:nth-of-type(10) > a',
        logoff: '(//a[contains(text(),"Logoff")])[2]',
        accountSuccessfullyUpdated: '.alert.alert-success',
        aSideWidgetList: '/html/body/div/div[2]/div/div[2]/div[1]/div/ul/li',

    }
    private base: PlaywrightWrapper;

    constructor(page: Page) {
        super(page);
        this.base = new PlaywrightWrapper(page);
    }

    async getWelcomeUserProfileTxt() {
        return await this.page.locator(this.elements.welcomeUserProfile).textContent()
    }

    async userProfileWelcomeMessage() {
        await this.page.locator(this.elements.welcomeUserProfile).waitFor()
        return this.page.locator(this.elements.welcomeUserProfile);
    }

    async getMyAccount() {
        return await this.page.locator(this.elements.myAccountTxt).textContent()
    }

    async tapEditAccountDetailsLink() {
        await this.page.locator(this.elements.editAccountDetailsLink).click();
    }

    async getAccountDashboardTxt() {
        return await this.page.locator(this.elements.accountDashboardTxt).textContent();
    }

    async accountDashboard() {
        return this.page.locator(this.elements.accountDashboardTxt);
    }

    async clickLogoffBtn() {
        await this.page.locator(this.elements.logoffLink).waitFor();
        await this.page.locator(this.elements.logoffLink).click({force: true});
    }

    async logoffBtn() {
        await this.page.locator(this.elements.logoffLink).waitFor();
        return this.page.locator(this.elements.logoffLink);
    }


    async getSuccessYourAccountSuccessfullyUpdatedTxt() {
        return await this.page.locator(this.elements.yourAccountSuccessfullyUpdatedTxt).textContent();
    }

//===================================================//

    async clickEditAccountDetailsImage() {
        await this.page.locator(this.elements.editAccountDetailsImage).waitFor();
        await this.page.locator(this.elements.editAccountDetailsImage).click({force: true});
    }

    async clickChangePasswordImageLink() {
        await this.page.locator(this.elements.changePasswordImageLink).waitFor();
        await this.page.locator(this.elements.changePasswordImageLink).click({force: true});
    }

    async clickManageAddressBookImageLink() {
        await this.page.locator(this.elements.manageAddressBookImageLink).waitFor();
        await this.page.locator(this.elements.manageAddressBookImageLink).click();
    }

    async clickMyWistListImageLink() {
        await this.page.locator(this.elements.myWistListImageLink).waitFor();
        await this.page.locator(this.elements.myWistListImageLink).click();
    }

    async clickOrderHistoryLink() {
        await this.page.locator(this.elements.orderHistoryLink).waitFor();
        await this.page.locator(this.elements.orderHistoryLink).click();
    }

    async clickTransactionHistoryLink() {
        await this.page.locator(this.elements.transactionHistoryLink).waitFor();
        await this.page.locator(this.elements.transactionHistoryLink).click();
    }

    async clickDownloadLink() {
        const downloadLink = this.page.locator(this.elements.downloadLink);
        await downloadLink.waitFor();
        await downloadLink.click();
    }

    async clickNotificationLink() {
        const notificationLink = this.page.locator(this.elements.notificationLink);
        await notificationLink.waitFor();
        await notificationLink.click();
    }

    async clickLogoffIcon() {
        const logoffIcon = this.page.locator(this.elements.logoffIcon);
        await this.page.waitForSelector(this.elements.logoffIcon);
        await logoffIcon.click({force: true});
    }

    async logOffIcon() {
        const logoffIcon = pageFixture.page.locator(this.elements.logoffIcon);
        await logoffIcon.waitFor();
        return logoffIcon;
    }

    async aSideWidgetList() {
        await this.page.locator(this.elements.aSideWidgetList).waitFor();
        return this.page.locator(this.elements.aSideWidgetList);
    }

    async Logoff() {
        return pageFixture.page.locator(this.elements.logoff);
    }

    async clickLogoffAsideWidget() {
        await pageFixture.page.locator(this.elements.logoff).click({force: true});
    }


}

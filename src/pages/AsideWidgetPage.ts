import {Locator, Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from "./BasePage";


export class AsideWidgetPage extends BasePage {
    readonly page: Page;
    private readonly myaccount: Locator;
    private readonly asideWidgetLinks: Locator;
    private readonly accountDashboard: Locator;
    private readonly myWistList: Locator;
    private readonly editAccountDetails: Locator;
    private readonly changePassword: Locator;
    private readonly manageAddressBook: Locator;
    private readonly orderHistory: Locator;
    private readonly transactionHistory: Locator;
    private readonly download: Locator;
    private readonly notification: Locator;
    private readonly logoff: Locator;


    private base: PlaywrightWrapper;

    constructor(page: Page) {
        super(page);
        this.page = page
        this.base = new PlaywrightWrapper(page);

        this.myaccount = page.getByRole('heading', {name: 'My Account', exact: true}).locator('span')
        this.asideWidgetLinks = page.locator('div.sidewidt')
        this.accountDashboard = page.getByRole('link', {name: ' Account Dashboard'})
        this.myWistList = page.getByRole('link', {name: ' My wish list'})
        this.editAccountDetails = page.getByRole('link', {name: ' Edit account details'})
        this.changePassword = page.getByRole('link', {name: ' Change password'})
        this.manageAddressBook = page.getByRole('link', {name: ' Manage Address Book'})
        this.orderHistory = page.getByRole('link', {name: ' Order history'})
        this.transactionHistory = page.getByRole('link', {name: ' Transaction history'})
        this.download = page.getByRole('link', {name: ' Downloads'})
        this.notification = page.getByRole('link', {name: ' Notifications'})
        this.logoff = page.getByRole('link', {name: ' Logoff'})

    }

    async myAccount() {
        return this.myaccount
    }

    async assertMyAccount() {
        return this.myaccount.isVisible()
    }

    async getAsideWidgetList() {
        return this.asideWidgetLinks.all()
    }

    async accountDashboardLink() {
        return this.accountDashboard
    }

    async assertAccountDashboardLink() {
        return this.accountDashboard.isVisible()
    }

    async myWistListLink() {
        return this.myWistList
    }

    async editAccountDetailsLink() {
        return this.editAccountDetails
    }

    async changePasswordLink() {
        return this.changePassword
    }

    async manageAddressBookLink() {
        return this.manageAddressBook
    }

    async orderHistoryLink() {
        return this.orderHistory
    }

    async transactionHistoryLink() {
        return this.transactionHistory
    }

    async downloadLink() {
        return this.download
    }

    async notificationLink() {
        return this.notification
    }

    async logoffLink() {
        return this.logoff
    }

    async tapOnMyWistListLink() {
        await this.myWistList.click({force: true})
    }

    async tapOnEditAccountDetailsLink() {
        await this.editAccountDetails.waitFor()
        await this.editAccountDetails.click({force: true})
    }

    async tapOnChangePasswordLink() {
        await this.changePassword.click({force: true})
    }

    async tapOnManageAddressBookLink() {
        await this.manageAddressBook.click({force: true})
    }

    async tapOnOrderHistoryLink() {
        await this.orderHistory.click({force: true})
    }

    async tapOnTransactionHistoryLink() {
        await this.transactionHistory.click({force: true})
    }

    async tapOnDownloadLink() {
        await this.download.click({force: true})
    }

    async tapOnNotificationLink() {
        await this.notification.click({force: true})
    }

    async tapOnLogoffLink() {
        await this.logoff.waitFor()
        await this.logoff.click({force: true})
    }

}

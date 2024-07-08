import {Page} from '@playwright/test';
import {TopNaviPage} from './TopNaviPage';
import {HomePage} from './HomePage';
import {AccountLoginPage} from './AccountLoginPage';
import {AccountCreatePage} from './AccountCreatePage';
import {AccountSuccessPage} from "./AccountSuccessPage";
import {AccountLogoutPage} from "./AccountLogoutPage";
import {AccountPage} from "./AccountPage";
import {ShoppingCartPage} from "./ShoppingCartPage";
import {AccountEditPage} from "./AccountEditPage";
import {AsideWidgetPage} from "./AsideWidgetPage";
import {ButtonAndLinksClicksPage} from "./ButtonAndLinksClicksPage";
import {ContactUsPage} from "./ContactUsPage";
import {ContactUsSuccessPage} from "./ContactUsSuccessPage";
import {FooterPage} from "./FooterPage";
import {NaviMenuComponent} from "./NaviMenuComponent";
import {ProductIDPage} from "./ProductIDPage";
import {SearchResultPage} from "./SearchResultPage";
import {CheckoutPage} from "./CheckoutPage";
import {CheckoutConfirmationPage} from "./CheckoutConfirmationPage";
import {CheckoutCartPage} from "./CheckoutCartPage";

export class POManager {
    page: Page;
    asidePage: AsideWidgetPage;
    clickOnPage: ButtonAndLinksClicksPage;
    contactUsPage: ContactUsPage;
    checkoutPage: CheckoutPage;
    checkoutConfirmationPage: CheckoutConfirmationPage;
    checkoutCartPage: CheckoutCartPage;
    contactUsSuccessPage: ContactUsSuccessPage;
    footerPage: FooterPage;
    topNaviPage: TopNaviPage;
    homePage: HomePage;
    loginPage: AccountLoginPage;
    accountPage: AccountPage;
    registerPage: AccountCreatePage;
    successPage: AccountSuccessPage;
    naviMenuComponent: NaviMenuComponent;
    productIDPage: ProductIDPage;
    logoutPage: AccountLogoutPage;
    searchResultPage: SearchResultPage
    shoppingCartPage: ShoppingCartPage;
    editPage: AccountEditPage;

    constructor(page: Page) {
        this.page = page;
        this.topNaviPage = new TopNaviPage(this.page);
        this.homePage = new HomePage(this.page);
        this.loginPage = new AccountLoginPage(this.page);
        this.registerPage = new AccountCreatePage(this.page);
        this.accountPage = new AccountPage(this.page);
        this.successPage = new AccountSuccessPage(this.page);
        this.logoutPage = new AccountLogoutPage(this.page);
        this.asidePage = new AsideWidgetPage(this.page);
        this.clickOnPage = new ButtonAndLinksClicksPage(this.page);
        this.contactUsPage = new ContactUsPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.checkoutConfirmationPage = new CheckoutConfirmationPage(this.page);
        this.checkoutCartPage = new CheckoutCartPage(this.page);
        this.contactUsSuccessPage = new ContactUsSuccessPage(this.page);
        this.footerPage = new FooterPage(this.page);
        this.naviMenuComponent = new NaviMenuComponent(this.page);
        this.productIDPage = new ProductIDPage(this.page);
        this.searchResultPage = new SearchResultPage(this.page);
        this.shoppingCartPage = new ShoppingCartPage(this.page);
        this.editPage = new AccountEditPage(this.page);
        this.shoppingCartPage = new ShoppingCartPage(this.page);


    }

    getTopNaviPage() {
        return this.topNaviPage;
    }

    getHomePage() {
        return this.homePage;
    }

    getAccountLoginPage() {
        return this.loginPage;
    }

    getRegisterPage() {
        return this.registerPage;
    }

    getSuccessPage() {
        return this.successPage;
    }

    getAccountPage() {
        return this.accountPage;
    }

    getLogoutPage() {
        return this.logoutPage;
    }

    getAsidePage() {
        return this.asidePage;
    }

    getClickOnPage() {
        return this.clickOnPage;
    }

    getContactUsPage() {
        return this.contactUsPage;
    }

    getCheckoutPage() {
        return this.checkoutPage;
    }

    getCheckoutConfirmationPage() {
        return this.checkoutConfirmationPage;
    }

    getCheckoutCartPage() {
        return this.checkoutCartPage;
    }

    getContactUsSuccessPage() {
        return this.contactUsSuccessPage;
    }

    getFooterPage() {
        return this.footerPage;
    }

    getNaviMenuComponent() {
        return this.naviMenuComponent;
    }

    getProductIDPage() {
        return this.productIDPage;
    }

    getSearchResultPage() {
        return this.searchResultPage;
    }

    getShoppingCartPage() {
        return this.shoppingCartPage;
    }

    getAccountEditPage() {
        return this.editPage;
    }

    // Add more pages and methods as needed


}

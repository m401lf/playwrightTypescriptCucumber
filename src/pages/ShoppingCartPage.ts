import {Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {BasePage} from './BasePage';

export class ShoppingCartPage extends BasePage {
    private base: PlaywrightWrapper
    private elements = {
        emptyShoppingCartMessage: "//*[contains(text(),'Your shopping cart is empty')]",
        estimatePostcodeBox: "//input[@id='estimate_postcode']",
        headerTxt: "h1.page-title.mb-3.h3",
        errorAlertForDesiredQuantityOrNotInStock: ".alert.alert-danger.alert-dismissible",
        productNames: "//*[@id='cart']/div/div[1]/table/tbody/tr",
        products: "//*[@id='cart']/div/div[1]/table/tbody/tr",
        productList: "/html/body/div/div[2]/div/div/div/form/div/div[1]/table/tbody/tr/td[2]",
        productImages: "//*[@id='cart']/div/div/table/tbody/tr/td[1]",
        productModels: "//*[@id='cart']/div/div/table/tbody/tr/td[3]",
        quantityBox: "div.input-group.input-group-sm",
        updateButton: "#cart_update",
        removeItems: "button.btn.btn-primary",
        product_Images: "/html/body/div/div[2]/div/div/div/form/div/div[1]/table/tbody/tr/td[1]",
        product_Names: "/html/body/div/div[2]/div/div/div/form/div/div[1]/table/tbody/tr/td[2]",
        product_Models: "/html/body/div/div[2]/div/div/div/form/div/div[1]/table/tbody/tr/td[3]",
        product_Quantities: "/html/body/div/div[2]/div/div/div/form/div/div[1]/table/tbody/tr/td[4]",
        product_Prices: "/html/body/div/div[2]/div/div/div/form/div/div[1]/table/tbody/tr/td[5]",
        product_TotalPrices: "/html/body/div/div[2]/div/div/div/form/div/div[1]/table/tbody/tr/td[6]",
        product_RemoveButtons: "/html/body/div/div[2]/div/div/div/form/div/div[1]/table/tbody/tr/td[7]",
        allTds_Tr: "/html/body/div/div[2]/div/div/div/form/div/div[1]/table/tbody/tr/td",
        totalPrices: "//*[@id='cart']/div/div[1]/table/tbody/tr[2]/td[6]",
        unitPrices: "//table/tbody/tr/td[6]",
        cart_empty: "//div[@innertext='Your shopping cart is empty!']",
        couponBox: "//input[@id='coupon_coupon']",
        applyCouponBtn: "#apply_coupon_btn",
        estimateCountryDropdown: "#estimate_country",
        countryZonesDropdown: "#estimate_country_zones",
        estimateCalculatorBtn: "//tbody/tr[2]/td[1]/div[1]/form[1]/div[2]/div[1]/span[1]/button[1]",
        flatRateShipmentsDropdown: "//select[@id='shippings']",
        removeItemBtn: "//*[@id='cart']/div/div[1]/table/tbody/tr[2]/td[7]/a/i",
        quantity: "cart_quantity50",
        updateBtn: "cart_update",
        checkoutBtn: ".mb20.pull-right > a[title='Checkout']",
        continueShoppingBtn: "//a[contains(text(),'Continue Shopping')]",
        checkoutSuccessMsg: "//div[@class='alert alert-success alert-dismissible']",
        checkoutSuccessTitle: "h2.text-center.mb-5",
        checkoutSuccessSubTitle: "p.text-center.mb-5",
        checkoutSuccessContinueShoppingBtn: "//a[contains(text(),'Continue Shopping')]",
        checkoutSuccessBackToStoreBtn: "//a[contains(text(),'Back to Store')]",
        checkoutSuccessPaymentMethods: "//h3[contains(text(),'Payment Methods')]",
        checkoutSuccessPaymentMethodsTitle: "h2.text-center.mb-5",
        checkoutSuccessPaymentMethodsSubTitle: "p.text-center.mb-5",
        checkoutSuccessPaymentMethodsContinueShoppingBtn: "//a[contains(text(),'Continue Shopping')]",
        checkoutSuccessPaymentMethodsBackToStoreBtn: "//a[contains(text(),'Back to Store')]",
        checkoutSuccessPaymentMethodsSummary: "//h3[contains(text(),'Payment Summary')]",
        checkoutSuccessPaymentMethodsSummaryTitle: "h2.text-center.mb-5",
        checkoutSuccessPaymentMethodsSummarySubTitle: "p.text-center.mb-5",


    }

    constructor(page: Page) {
        super(page);

        this.base = new PlaywrightWrapper(page);


    }

    async emptyShoppingCartMessage() {
        await this.page.waitForSelector(this.elements.emptyShoppingCartMessage)
        return this.page.locator(this.elements.emptyShoppingCartMessage);

    }

    async estimatePostcodeBox() {
        await this.page.waitForSelector(this.elements.estimatePostcodeBox)
        return this.page.locator(this.elements.estimatePostcodeBox);
    }

    async headerTxt() {
        await this.page.waitForSelector(this.elements.headerTxt)
        return this.page.locator(this.elements.headerTxt);
    }

    async errorAlertForDesiredQuantityOrNotInStock() {
        await this.page.waitForSelector(this.elements.errorAlertForDesiredQuantityOrNotInStock)
        return this.page.locator(this.elements.errorAlertForDesiredQuantityOrNotInStock);
    }

    async productNames() {
        await this.page.waitForSelector(this.elements.productNames)
        return this.page.locator(this.elements.productNames);
    }

    async products() {
        await this.page.waitForSelector(this.elements.products)
        return this.page.locator(this.elements.products);
    }

    async productList() {
        await this.page.waitForSelector(this.elements.productList)
        return this.page.locator(this.elements.productList);
    }

    async productImages() {
        await this.page.waitForSelector(this.elements.productImages)
        return this.page.locator(this.elements.productImages);
    }

    async productModels() {
        await this.page.waitForSelector(this.elements.productModels)
        return this.page.locator(this.elements.productModels);
    }

    async quantityBox() {
        await this.page.waitForSelector(this.elements.quantityBox)
        return this.page.locator(this.elements.quantityBox);
    }

    async removeItems() {
        await this.page.waitForSelector(this.elements.removeItems)
        return this.page.locator(this.elements.removeItems);
    }

    async product_Images() {
        await this.page.waitForSelector(this.elements.product_Images)
        return this.page.locator(this.elements.product_Images);
    }

    async product_Names() {
        await this.page.waitForSelector(this.elements.product_Names)
        return this.page.locator(this.elements.product_Names);
    }

    async product_Models() {
        await this.page.waitForSelector(this.elements.product_Models)
        return this.page.locator(this.elements.product_Models);
    }

    async product_Quantities() {
        await this.page.waitForSelector(this.elements.product_Quantities)
        return this.page.locator(this.elements.product_Quantities);
    }

    async product_Prices() {
        await this.page.waitForSelector(this.elements.product_Prices)
        return this.page.locator(this.elements.product_Prices);
    }

    async product_TotalPrices() {
        await this.page.waitForSelector(this.elements.product_TotalPrices)
        return this.page.locator(this.elements.product_TotalPrices);
    }

    async product_RemoveButtons() {
        await this.page.waitForSelector(this.elements.product_RemoveButtons)
        return this.page.locator(this.elements.product_RemoveButtons);
    }

    async allTds_Tr() {
        await this.page.waitForSelector(this.elements.allTds_Tr)
        return this.page.locator(this.elements.allTds_Tr);
    }

    async totalPrices() {
        await this.page.waitForSelector(this.elements.totalPrices)
        return this.page.locator(this.elements.totalPrices);
    }

    async unitPrices() {
        await this.page.waitForSelector(this.elements.unitPrices)
        return this.page.locator(this.elements.unitPrices);
    }

    async cart_empty() {
        await this.page.waitForSelector(this.elements.cart_empty)
        return this.page.locator(this.elements.cart_empty);
    }

    async couponBox() {
        await this.page.waitForSelector(this.elements.couponBox)
        return this.page.locator(this.elements.couponBox);
    }

    async applyCouponButton() {
        await this.page.waitForSelector(this.elements.applyCouponBtn)
        return this.page.locator(this.elements.applyCouponBtn);
    }

    async estimateCountryDropdown() {
        await this.page.waitForSelector(this.elements.estimateCountryDropdown)
        return this.page.locator(this.elements.estimateCountryDropdown);
    }

    async countryZonesDropdown() {
        await this.page.waitForSelector(this.elements.countryZonesDropdown)
        return this.page.locator(this.elements.countryZonesDropdown);
    }

    async estimateCalculatorBtn() {
        await this.page.waitForSelector(this.elements.estimateCalculatorBtn)
        return this.page.locator(this.elements.estimateCalculatorBtn);
    }

    async flatRateShipmentsDropdown() {
        await this.page.waitForSelector(this.elements.flatRateShipmentsDropdown)
        return this.page.locator(this.elements.flatRateShipmentsDropdown);
    }

    async removeItemButton() {
        await this.page.waitForSelector(this.elements.removeItemBtn)
        return this.page.locator(this.elements.removeItemBtn);
    }

    async quantity() {
        await this.page.waitForSelector(this.elements.quantity)
        return this.page.locator(this.elements.quantity);
    }

    async updateButton() {
        await this.page.waitForSelector(this.elements.updateBtn)
        return this.page.locator(this.elements.updateBtn);
    }

    async checkoutButton() {
        await this.page.waitForSelector(this.elements.checkoutBtn)
        return this.page.locator(this.elements.checkoutBtn);
    }

    async continueShoppingButton() {
        await this.page.waitForSelector(this.elements.continueShoppingBtn)
        return this.page.locator(this.elements.continueShoppingBtn);
    }

    async checkoutSuccessMessage() {
        await this.page.waitForSelector(this.elements.checkoutSuccessMsg)
        return this.page.locator(this.elements.checkoutSuccessMsg);
    }

    async checkoutSuccessTitle() {
        await this.page.waitForSelector(this.elements.checkoutSuccessTitle)
        return this.page.locator(this.elements.checkoutSuccessTitle);
    }

    async checkoutSuccessSubTitle() {
        await this.page.waitForSelector(this.elements.checkoutSuccessSubTitle)
        return this.page.locator(this.elements.checkoutSuccessSubTitle);
    }

    async checkoutSuccessContinueShoppingButton() {
        await this.page.waitForSelector(this.elements.checkoutSuccessContinueShoppingBtn)
        return this.page.locator(this.elements.checkoutSuccessContinueShoppingBtn);
    }

    async checkoutSuccessPaymentMethodsBackToStoreButton() {
        await this.page.waitForSelector(this.elements.checkoutSuccessPaymentMethodsBackToStoreBtn)
        return this.page.locator(this.elements.checkoutSuccessPaymentMethodsBackToStoreBtn);
    }

    async checkoutSuccessPaymentMethodsSummary() {
        await this.page.waitForSelector(this.elements.checkoutSuccessPaymentMethodsSummary)
        return this.page.locator(this.elements.checkoutSuccessPaymentMethodsSummary);
    }

    async checkoutSuccessPaymentMethodsSummaryTitle() {
        await this.page.waitForSelector(this.elements.checkoutSuccessPaymentMethodsSummaryTitle)
        return this.page.locator(this.elements.checkoutSuccessPaymentMethodsSummaryTitle);
    }

    async checkoutSuccessPaymentMethodsSummarySubTitle() {
        await this.page.waitForSelector(this.elements.checkoutSuccessPaymentMethodsSummarySubTitle)
        return this.page.locator(this.elements.checkoutSuccessPaymentMethodsSummarySubTitle);
    }

    async enterCouponNumberOnCouponBox(couponNum: string) {
        await this.page.waitForSelector(this.elements.couponBox)
        await this.page.locator(this.elements.couponBox).fill(couponNum);
    }

    async clickApplyCoupon() {
        await this.page.waitForSelector(this.elements.applyCouponBtn)
        await this.page.locator(this.elements.applyCouponBtn).click();
    }

    async selectCountry(country: string) {
        await this.page.waitForSelector(this.elements.estimateCountryDropdown)
        await this.page.locator(this.elements.estimateCountryDropdown).selectOption(country);
    }

    async selectZone(zone: string) {
        await this.page.waitForSelector(this.elements.countryZonesDropdown)
        await this.page.locator(this.elements.countryZonesDropdown).selectOption(zone);
    }

    async clickEstimateCalculator() {
        await this.page.waitForSelector(this.elements.estimateCalculatorBtn)
        await this.page.locator(this.elements.estimateCalculatorBtn).click();
    }

    async selectFlatRateShipping(shippingMethod: string) {
        await this.page.waitForSelector(this.elements.flatRateShipmentsDropdown)
        await this.page.locator(this.elements.flatRateShipmentsDropdown).selectOption(shippingMethod);
    }

    async clickRemoveItem() {
        await this.page.waitForSelector(this.elements.removeItemBtn)
        await this.page.locator(this.elements.removeItemBtn).click();
    }

    async updateQuantity(quantity: number) {
        await this.page.waitForSelector(this.elements.quantity)
        await this.page.locator(this.elements.quantity).fill(quantity.toString());
    }

    async clickUpdateButton() {
        await this.page.waitForSelector(this.elements.updateBtn)
        await this.page.locator(this.elements.updateBtn).click();
    }

    async clickCheckoutButton() {
        await this.page.waitForSelector(this.elements.checkoutBtn)
        await this.page.locator(this.elements.checkoutBtn).click();
    }

    async clickContinueShoppingButton() {
        await this.page.waitForSelector(this.elements.continueShoppingBtn)
        await this.page.locator(this.elements.continueShoppingBtn).click();
    }


}

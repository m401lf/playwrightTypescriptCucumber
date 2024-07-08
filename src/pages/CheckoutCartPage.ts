import {BasePage} from "./BasePage";
import {expect, Locator, Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export class CheckoutCartPage extends BasePage {
    readonly page: Page;
    private readonly registerSubMenuTxt: Locator;
    private readonly applyCouponBtn: Locator;
    private readonly couponBox: Locator;
    private readonly proceedToCheckoutBtn: Locator;
    private readonly subtotalPrice: Locator;
    private readonly total_price: Locator;
    private readonly shippingPrice: Locator;
    private readonly shippingMethodDropdown: Locator;
    private readonly paymentMethodDropdown: Locator;
    private readonly estimateCountryDropdown: Locator;
    private readonly countryZonesDropdown: Locator;
    private readonly estimatePostcodeBox: Locator;

    private base: PlaywrightWrapper;

    constructor(page: Page) {
        super(page);
        this.page = page
        this.base = new PlaywrightWrapper(page);

        this.registerSubMenuTxt = page.locator('.breadcrumb > li:nth-of-type(3) > a');
        this.applyCouponBtn = page.locator('button[name="apply_coupon"]');
        this.couponBox = page.locator('input[id="coupon_coupon"]');
        this.proceedToCheckoutBtn = page.locator('button[name="proceed"]');
        this.subtotalPrice = page.locator('span[class="cart-subtotal"]');
        this.total_price = page.locator('span[class="cart-total"]');
        this.shippingPrice = page.locator('span[class="shipping-cost"]');
        this.shippingMethodDropdown = page.locator('select[name="shipping_method"]');
        this.paymentMethodDropdown = page.locator('select[name="payment_method"]');
        this.estimateCountryDropdown = page.locator('select[name="country_id"]');
        this.countryZonesDropdown = page.locator('select[name="zone_id"]');
        this.estimatePostcodeBox = page.locator('input[name="postcode"]');

    }

    async clickRegisterSubMenu() {
        await this.registerSubMenuTxt.click();
    }

    async clickApplyCoupon() {
        await this.applyCouponBtn.click();
    }

    async enterCoupon(coupon: string) {
        await this.couponBox.fill(coupon);
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckoutBtn.click()
    }

    async clickProceedToCheckoutButton() {
        await this.proceedToCheckoutBtn.click()
    }

    async totalPrice() {
        return this.totalPrice;
    }

    async getSubtotalPriceText() {
        return this.subtotalPrice.textContent();
    }

    async getShippingPriceText() {
        return this.shippingPrice.textContent();
    }

    async applyCoupon(coupon: string) {
        await this.applyCouponBtn.click();
        await this.couponBox.fill(coupon);
    }

    async selectShippingMethod(shippingMethod: string) {
        await this.shippingMethodDropdown.selectOption(shippingMethod);
    }

    async selectPaymentMethod(paymentMethod: string) {
        await this.paymentMethodDropdown.selectOption(paymentMethod);
    }

    async selectCountry(country: string) {
        await this.estimateCountryDropdown.selectOption(country);
    }

    async selectCountryZone(zone: string) {
        await this.countryZonesDropdown.selectOption(zone);
    }

    async enterPostcode(postcode: string) {
        await this.estimatePostcodeBox.fill(postcode);
    }

    async assertSubtotalPrice(price: string) {
        await this.assertTextToBeVisible(price);
        const subtotal = await this.getSubtotalPriceText();
    }

    async assertTotalPrice(price: string) {
        await this.assertTextToBeVisible(price);
        const total = await this.totalPrice();
    }

    async assertShippingPrice(price: string) {
        await this.assertTextToBeVisible(price);
        const shippingPrice = await this.getShippingPriceText();
        expect(shippingPrice).toContain(price);
    }

    async assertCouponApplied() {
        await this.assertTextToBeVisible('Coupon code applied successfully.');
    }


}

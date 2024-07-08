import {BasePage} from "./BasePage";
import {Locator, Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export class FooterPage extends BasePage {
    readonly page: Page
    private readonly returnPolicyLink: Locator;
    private readonly aboutUsLink: Locator;
    private readonly privacyPolicyLink: Locator;
    private readonly shippingLink: Locator;
    private readonly contactUsLink: Locator;
    private readonly siteMapLink: Locator;
    private readonly loginLink: Locator;
    private readonly facebookIcon: Locator;
    private readonly twitterIcon: Locator;
    private readonly linkedinIcon: Locator;
    private readonly subscriptionBtn: Locator;
    private readonly subscriptionBox: Locator;
    private readonly paypalIcon: Locator;
    private readonly contactUsTxt: Locator;
    private readonly newsletterSignupTxt: Locator;
    private readonly phoneTxt: Locator;
    private readonly aboutUsTxt: Locator;
    private readonly emailTxt: Locator;
    private readonly msgIcon: Locator;
    private readonly processingIcon: Locator;
    private readonly TestimonialsTxt: Locator;

    private base: PlaywrightWrapper;

    constructor(page: Page) {
        super(page);
        this.page = page
        this.base = new PlaywrightWrapper(page);


        this.returnPolicyLink = page.locator('//a[contains(text(),\'Return Policy\')]')
        this.aboutUsLink = page.locator('//a[contains(text(),\'About Us\')]')
        this.privacyPolicyLink = page.locator('//a[contains(text(),\'Privacy Policy\')]')
        this.shippingLink = page.locator('//a[normalize-space()=\'Shipping\']')
        this.contactUsLink = page.locator('//a[normalize-space()=\'Contact Us\']')
        this.siteMapLink = page.locator('//a[normalize-space()=\'Site Map\']')
        this.loginLink = page.locator('//a[normalize-space()=\'Login\']')
        this.facebookIcon = page.locator('div[class=\'footer_block\'] a[title=\'Facebook\']')
        this.twitterIcon = page.locator('div[class=\'footer_block\'] a[title=\'Twitter\']')
        this.linkedinIcon = page.locator('div[class=\'footer_block\'] a[title=\'Linkedin\']')
        this.subscriptionBtn = page.locator('//button[contains(text(),\'Subscribe\')]')
        this.subscriptionBox = page.locator('#appendedInputButton')
        this.paypalIcon = page.locator('img[alt=\'payments\']')
        this.contactUsTxt = page.locator('//h2[normalize-space()=\'Contact Us\']')
        this.newsletterSignupTxt = page.locator('//h2[contains(text(),\'Newsletter Signup\')]')
        this.TestimonialsTxt = page.locator('//h2[contains(text(),\'Testimonials\')]')
        this.phoneTxt = page.locator('.contact > :nth-child(1)')
        this.aboutUsTxt = page.locator('//h2[contains(text(),\'About Us\')]')
        this.emailTxt = page.locator('.contact > :nth-child(2)')
        this.msgIcon = page.locator('\'#newslettersignup > .pull-left\'')

    }

    async aboutUs() {
        return this.aboutUsLink

    }

    async privacyPolicy() {
        return this.privacyPolicyLink
    }

    async returnPolicy() {
        return this.returnPolicyLink
    }

    async shipping() {
        return this.shippingLink
    }

    async contactUs() {
        return this.contactUsLink
    }

    async clickContactUsLink() {
        await this.contactUsLink.click()
    }

    async siteMap() {
        return this.siteMapLink
    }

    async login_link() {
        return this.loginLink
    }

    async aboutUsText() {
        return this.aboutUsTxt
    }

    async testimonialsText() {
        return this.TestimonialsTxt
    }

    async contactUsText() {
        return this.contactUsTxt
    }

    async newsletterSignupText() {
        return this.newsletterSignupTxt
    }

    async phoneText() {
        return this.phoneTxt
    }

    async emailText() {
        return this.emailTxt
    }

    async messageIcon() {
        return this.msgIcon
    }

    async processing_Icon() {
        return this.processingIcon
    }

    async inputSubscribeNewsletterBox(email) {
        await this.subscriptionBox.fill(email)
    }

    async clickSubscribeBtn() {
        return this.subscriptionBtn.click()
    }

    async assertPaypalIcon() {
        return this.paypalIcon.isVisible()
    }

    async assertFacebookIcon() {
        return this.facebookIcon.isVisible()
    }

    async assertTwitterIcon() {
        return this.twitterIcon.isVisible();
    }

    async assertLinkedinIcon() {
        return this.linkedinIcon.isVisible();
    }

}


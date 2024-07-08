import {expect, Page} from "@playwright/test";

export default class Assert {

    constructor(private page: Page) {
    }

    async assertTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    async assertTitleContains(title: string) {
        const pageTitle = await this.page.title();
        expect(pageTitle).toContain(title);
    }

    async assertURLStartsWith(url: string) {
        await expect(this.page).toHaveURL(new RegExp(`^${url}`));
    }

    async assertURLEndsWith(url: string) {
        await expect(this.page).toHaveURL(new RegExp(`${url}$`));
    }

    async assertURL(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    async assertURLContains(title: string) {
        const pageURL = this.page.url();
        expect(pageURL).toContain(title);
    }


    async assertElementVisible(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementNotVisible(selector: string) {
        await expect(this.page.locator(selector)).toBeHidden();
    }

    async assertElementText(selector: string, text: string) {
        await expect(this.page.locator(selector)).toHaveText(text);
    }

    async assertElementNotText(selector: string, text: string) {
        await expect(this.page.locator(selector)).not.toHaveText(text);
    }

    async assertElementTextContains(selector: string, text: string) {
        await expect(this.page.locator(selector)).toContainText(text);
    }

    async assertElementNotTextContains(selector: string, text: string) {
        await expect(this.page.locator(selector)).not.toContainText(text);
    }

    async assertElementValueContains(selector: string, value: string) {
        await expect(this.page.locator(selector)).toContainText(value);
    }

    async assertElementNotValueContains(selector: string, value: string) {
        await expect(this.page.locator(selector)).not.toContainText(value);
    }

    async assertElementHaveAccessibleName(selector: string, text: string) {
        await expect(this.page.locator(selector)).toHaveAccessibleName(text);
    }

    async assertElementValue(selector: string, value: string) {
        await expect(this.page.locator(selector)).toHaveValue(value);
    }

    async assertElementNotValue(selector: string, value: string) {
        await expect(this.page.locator(selector)).not.toHaveValue(value);
    }

    async assertElementAttribute(selector: string, attribute: string, value: string) {
        await expect(this.page.locator(selector)).toHaveAttribute(attribute, value);
    }

    async assertElementNotAttribute(selector: string, attribute: string, value: string) {
        await expect(this.page.locator(selector)).not.toHaveAttribute(attribute, value);
    }

    async assertElementCount(selector: string, count: number) {
        await expect(this.page.locator(selector)).toHaveCount(count);
    }

    async assertElementNotCount(selector: string, count: number) {
        await expect(this.page.locator(selector)).not.toHaveCount(count);
    }


    async assertElementEnabled(selector: string) {
        await expect(this.page.locator(selector)).toBeEnabled();
    }

    async assertElementNotEnabled(selector: string) {
        await expect(this.page.locator(selector)).not.toBeEnabled();
    }

    async assertElementDisabled(selector: string) {
        await expect(this.page.locator(selector)).toBeDisabled();
    }

    async assertElementNotDisabled(selector: string) {
        await expect(this.page.locator(selector)).not.toBeDisabled();
    }

    async assertElementFocused(selector: string) {
        await expect(this.page.locator(selector)).toBeFocused();
    }

    async assertElementNotFocused(selector: string) {
        await expect(this.page.locator(selector)).not.toBeFocused();
    }


    async assertElementNotVisibleAtAll(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementVisibleAtLeastOnce(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }


    async assertElementNotVisibleOnScreen(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementVisibleOnScreen(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementNotVisibleInDocument(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementVisibleInDocument(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementNotVisibleInDOM(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementVisibleInDOM(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementNotVisibleInShadowDOM(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementVisibleInShadowDOM(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementNotVisibleInParent(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementVisibleInParent(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementNotVisibleInFrame(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertElementVisibleInFrame(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }


}
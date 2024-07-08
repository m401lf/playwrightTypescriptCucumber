import {expect, type Locator, type Page} from '@playwright/test';


export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Common method to navigate to a URL
    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    // Common method to click an element
    async clickElement(element: Locator) {
        await element.click();
    }

    // Common method to fill out a form field
    async fillFormField(element: Locator, value: string) {
        await element.fill(value);
    }

    // Common method to retrieve text from an element
    async getElementText(element: Locator): Promise<string> {
        return element.innerText();
    }

    // Common method to wait for an element to be visible
    async waitForElementVisible(element: Locator | string) {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, {state: 'visible'});
        } else {
            await element.waitFor({state: 'visible'});
        }
    }

    // Common method to wait for an element to be hidden
    async waitForElementHidden(element: Locator) {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, {state: 'hidden'});
        } else {
            await element.waitFor({state: 'hidden'});
        }
    }

    // Common method to take a screenshot
    async takeScreenshot(fileName: string) {
        await this.page.screenshot({path: fileName});
    }

    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }

    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async navigateToPageLink(link: string) {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(link)
        ])
    }

    async wait(time) {
        await this.page.waitForTimeout(time)
    }

    async typeText(locator: string, text: string) {
        const element = this.page.locator(locator);
        await element.fill(text);
    }

    async click(locator: string) {
        const element = this.page.locator(locator);
        await element.click();
    }

    async assertTextToBeVisible(text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }

    async assertTextNotToBeVisible(text: string) {
        await expect(this.page.getByText(text)).toBeHidden();
    }


    async assertTextToBe(text: string, element: Locator) {
        await expect(element).toBe(text);
    }

    async assertTextNotToBe(text: string, element: Locator) {
        await expect(element).not.toBe(text);
    }

    async hasRunningText(selector: Locator): Promise<boolean> {
        // @ts-ignore
        return this.page.isVisible(selector);
    }

    async assertTextIsDisplayed(selector: string) {
        await this.page.waitForSelector(selector)
        return this.page.locator(selector).isVisible()
    }

    async assertTextIsChecked(selector: string) {
        await this.page.waitForSelector(selector)
        return this.page.locator(selector).isChecked()
    }

}
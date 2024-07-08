import {After, AfterAll, Before, BeforeAll, Status} from '@cucumber/cucumber';
import {Browser, BrowserContext, chromium, Page} from '@playwright/test';
import {pageFixture} from './pageFixture';
import {createLogger} from "winston";
import {options} from "../helper/util/logger";

let browser: Browser;
let page: Page;
let context: BrowserContext

BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
})

Before(async function ({pickle}) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext();
    page = await browser.newPage();
    // @ts-ignore
    pageFixture.page = page;
    pageFixture.logger = createLogger(options(scenarioName));
})

After(async function ({pickle, result}) {
    // Screenshot only for failure
    if (result?.status == Status.FAILED) {
        const image = await pageFixture.page.screenshot({
            path: `./test-result/screenshots/${pickle.name}.png`,
            type: "png"
        });
        await this.attach(image, "image/png");
    }

    // Screenshot after each scenario
    // const image = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: "png" });
    // await this.attach(image, "image/png");
    await pageFixture.page.close();
    await page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close();
    await pageFixture.logger.close()
});

// AfterStep(async function({pickle}){
//     // Screenshot after each step
//     const image = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: "png" });
//     await this.attach(image, "image/png");
// })
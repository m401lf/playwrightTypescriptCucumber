import {Locator, Page} from "@playwright/test";
import {Logger} from "winston";

export const pageFixture = {
    // @ts-ignore
    page: undefined as Page,
    // @ts-ignore
    logger: undefined as Logger,
    // @ts-ignore
    locator: undefined as Locator
}
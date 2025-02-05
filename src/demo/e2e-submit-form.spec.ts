import {expect, test} from '@playwright/test'

test.describe('Feedback Form', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#feedback')
    })

    // Reset feedback form
    test('Reset feedback form', async ({page}) => {
        await page.fill('#name', 'some name')
        await page.fill('#email', 'some email@email.com')
        await page.fill('#subject', 'some subject')
        await page.fill('#comment', 'some nice comment about the application')
        await page.click("input[name='clear']")

        const nameInput = await page.locator('#name')
        const commentInput = await page.locator('#comment')
        await expect(nameInput).toBeEmpty()
        await expect(commentInput).toBeEmpty()
    })

    // Submit feedback form
    test('Submit feedback form', async ({page}) => {
        await page.fill('#name', 'some name')
        await page.fill('#email', 'some email@email.com')
        await page.fill('#subject', 'some subject')
        await page.fill('#comment', 'some nice comment about the application')
        await page.click("input[fill='submit']")
        await page.waitForSelector('#feedback-title')
    })
})

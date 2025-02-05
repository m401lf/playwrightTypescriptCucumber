import {expect, test} from '@playwright/test'

test.describe.only('Currency Exchange Form', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click('text=Sign in')
    })

    test('Should make currency exchange', async ({page}) => {
        await page.click('#pay_bills_tab')
        await page.click('text=Purchase Foreign Currency')
        await page.selectOption('#pc_currency', 'EUR')

        const rate = await page.locator('#sp_sell_rate')
        await expect(rate).toContainText('1 euro (EUR)')

        await page.fill('#pc_amount', '1000')
        await page.click('#pc_inDollars_true')
        await page.click('#pc_calculate_costs')

        const conversionAmount = await page.locator('#pc_conversion_amount')
        await expect(conversionAmount).toContainText('1000.00 U.S. dollar (USD)')

        await page.click('#purchase_cash')

        const message = await page.locator('#alert_content')
        await expect(message).toBeVisible()
        await expect(message).toContainText(
            'Foreign currency cash was successfully purchased'
        )
    })
})

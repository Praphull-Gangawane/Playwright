import test, {page, expect} from '@playwright/test'

test('Assertion demo', async({page})=>{

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    //Assertions
    //ckeck element is present or not
    await expect (page.locator('text=The Kitchen')).toHaveCount(1)
    if(await page.$('text=The Kitchen')){ 
    await page.locator('text=The Kitchen').click() }
    //check element hidden or visible
    await expect (page.locator('text=The Kitchen')).toBeVisible()
    
    //using soft assertion by adding soft keyword
    //await expect.soft (page.locator('text=The Kitchen')).toBeHidden()
    //check element enabled or disabled
    await expect (page.locator('text=The Kitchen')).toBeEnabled()
   // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
    //check text
    await expect (page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    //await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('ABCD')
    //Check attribute value
    await expect (page.locator('text=The Kitchen')).toHaveAttribute('class',/.*css-dpmy2a/)
    await expect (page.locator('text=The Kitchen')).toHaveClass('chakra-heading css-dpmy2a')
    //check url & Title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)
    //visual validation with screenshot
    await expect(page).toHaveScreenshot()

})
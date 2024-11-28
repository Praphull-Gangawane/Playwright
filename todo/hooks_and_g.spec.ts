import { test,expect } from "playwright/test";

test.describe('My suit',()=>{  
test.beforeEach(async({page})=>
{
    await page.goto('https://www.saucedemo.com/v1/')
    //await page.pause()
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    //await page.close()

})
// test.afterAll(async ({page})=>
// {
//     await page.close()
// })
test('Homepage', async({page})=>{
    // await page.goto('https://www.saucedemo.com/v1/')
    // //await page.pause()
    // await page.locator('[data-test="username"]').click();
    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').click();
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    // await page.getByRole('button', { name: 'LOGIN' }).click();
    // //await page.pause()
    await page.locator('div').filter({ hasText: /^\$49\.99ADD TO CART$/ }).getByRole('button').click();
    await page.getByRole('link', { name: '1' }).click();
    await page.getByRole('link', { name: 'CHECKOUT' }).click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('abc');
    await page.locator('[data-test="firstName"]').press('Tab');
    await page.locator('[data-test="lastName"]').fill('xyz');
    await page.locator('[data-test="lastName"]').press('Tab');
    await page.locator('[data-test="postalCode"]').fill('789456');
    await page.getByRole('button', { name: 'CONTINUE' }).click();
  
})
test("Logout", async({page})=>
{
    // await page.goto('https://www.saucedemo.com/v1/')
    // //await page.pause()
    // await page.locator('[data-test="username"]').click();
    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').click();
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    // await page.getByRole('button', { name: 'LOGIN' }).click();
    //await page.pause()
    //await page.waitForURL('https://www.saucedemo.com/v1/inventory.html');
    //const context = await browser.new 
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
   // await page.close()

})})
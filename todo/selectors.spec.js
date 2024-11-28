import{test, expect}from '@playwright/test'

test ('Selector Demo', async ({page})=>{

  await  page.goto('https://www.saucedemo.com/v1/') 
  await page.pause()  
  await page.click('id=user-name')
  await page.locator('id=user-name').fill('standard_user')
   //using xpath
   ////input[@id='password']
  await page.locator('//input[@id="password"]').fill('secret_sauce')
  //css selector
  //#login-button
  //await page.locator('#login-button').click()
 // using text
 //await page.locator('text=LOGIN').click()
 //or
 await page.locator('input:has-text("LOGIN")').click()

} );
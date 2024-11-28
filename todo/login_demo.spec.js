import {test, expect} from '@playwright/test'
test('Demo Login Test1', async({page})=>{



    await page.goto('https://demo.applitools.com/')
   // await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Demo')
    await page.locator('[placeholder="Enter your password"]').fill('Demo@123')
    await page.locator('text=Sign in').click()
})
test.only('Demo login2', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   // await page.pause()
    //after this cmd fllowing steps are recorded and copied
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Username').press('Tab');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('span').filter({ hasText: 'manda user' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
  
    // ---------------------
    await context.close();
    await browser.close();

}
)
//test only is used to run only this task
//the following test is copied by recording all step by using pause command
test.only("Demo Login3", async({page})=>{

   // await page.pause()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('span').filter({ hasText: 'manda user' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.close()
})
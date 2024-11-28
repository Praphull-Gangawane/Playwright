import {test, expect, chromium}from '@playwright/test'

test('Slowmo video recording', async()=>{

    const browser = await chromium.launch(
        {
        slowMo:500,
        headless:false    
        }
    );

    const context = await browser.newContext(
        {
        recordVideo:{
            dir: 'video/',
            size: {width:800, height:600}
        }
    }
    );

    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Username').press('Tab');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('span').filter({ hasText: 'manda user' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
  
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // await page.close()

    await context.close();
}

)
//const { test, expect } = require('./pages/fixture'); 
import { test, expect } from './pages/fixture';
//const base = require('@playwright/test');

// import { test, expect } from '@playwright/test';
// import { LoginPage } from './pages/LoginPage.js';

test('Login and capture screenshot on failure', async ({ page, loginPage, credentials }) => {
   //const loginPage = new LoginPage(page);

    await loginPage.goto();
    //await loginPage.login('varsha.bangera+productowner@auxosolutions.io','Shetty@12345');
    await loginPage.login(credentials.username, credentials.password);


  try {
    // This will fail because title will not match
    await expect(page).toHaveTitle('Carlyle1');
  } catch (error) {
    // Take full page screenshot when it fails
    await page.screenshot({ path: 'tests/Screenshots/error.png', fullPage: true });
    throw error; // Rethrow so Playwright marks test as failed
  }
});

test('Allocation', async ({ page, loginPage, credentials  })=>{
 
    //const loginPage = new LoginPage(page);

    await loginPage.goto();
    //await loginPage.login("varsha.bangera+productowner@auxosolutions.io", "Shetty@12345");
    await loginPage.login(credentials.username, credentials.password);

    await page.click("//div[@id='form-group-btnAllocations']")
    await expect(page).toHaveTitle('Carlyle')

    await page.click("//div[@id='form-group-btnAllocations']")

    await expect(page).toHaveURL("https://carlyle-uatx.unqork.io/?style=carlyle-rebrand#/display/Allocations")

    await page.click("//button[@id='btnOpenAddSelect']")
    await expect(await page.locator("//h3[normalize-space()='Add New Allocations']")).toBeVisible()


  // negative scenario
    await page.locator('#issuer').selectOption('AASET 2021-1 Trust')

    await page.locator('#security').selectOption('Class A Fixed Rate Secured Notes Series 2021-1')

    await page.locator('#fund').selectOption('AIG - 	Carlyle Structured Solutions AIG')

    await page.locator("#allocation").fill("85");
    await page.locator("#allocation").press("Enter");

    // Locate the button
    const button = page.locator('#btnAddSelect');

    // Check if it is disabled
    const isDisabled = await button.isDisabled();

    // Assert that it is disabled
    await expect(button).toBeDisabled();

    
   //creating new allocation
    await page.locator("//input[@id='asOfDate']").click(); // focus    
    await page.locator("//input[@id='asOfDate']").fill("06/30/2025");

    await page.locator('#issuer').selectOption('AASET 2021-1 Trust')

    await page.locator('#security').selectOption('Class A Fixed Rate Secured Notes Series 2021-1')

    await page.locator('#fund').selectOption('AIG - 	Carlyle Structured Solutions AIG')

    await page.locator("#allocation").fill("85");
    await page.locator("#allocation").press("Enter");

    await page.click("#btnAddSelect")
    await page.click("button[class='swal2-confirm swal2-styled']") 

    //verifying the created allocation
   await expect(
     page.locator('table.jsgrid-table tbody tr.jsgrid-row:nth-child(1) td.jsgrid-cell').nth(6)
    ).toHaveText('85');

    

    
})
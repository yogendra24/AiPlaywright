// @ts-check
import { test, expect } from '@playwright/test';
import {ai} from "@zerostep/playwright"


test('AI Test capability', async ({ page }) => {
  const aiArgs = {page,test}
  await page.goto('https://www.automationexercise.com/');
  await page.getByText(' Signup / Login').click();
  //await ai('Click Signup/Login',aiArgs);
  await ai('Enter Email Address test456@gmail.com',aiArgs);
  await page.getByPlaceholder('Password').fill('Test');
  await ai('Enter Password test',aiArgs);
  await ai('Click Login',aiArgs);
  await expect(page.getByText('Logout')).toBeVisible();
  //await page.isVisible("text=' Logout'")
});
/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  //npx playwright test --ui
});*/

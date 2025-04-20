const { test, expect } = require('@playwright/test');
import {ai} from "@zerostep/playwright"

test('AI Test capability', async ({ page }) => {
  const aiArgs = {page,test}
  await page.goto('https://www.delta.com/')
  await ai('Click LOG IN')
  await ai('Click the menu button')
  await ai('Click the logout link')
});
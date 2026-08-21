import { test, expect } from '@playwright/test';

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
  await expect(page.getByRole('heading', { name: 'Istallation' })).toBeVisible();
});

Use the TestDino MCP server to debug the failures in run test_run_912ec7c6ba342ae266adcb12 of project project_f1c2dd61a48394f6e17390d5. Group them by shared cause before proposing any change.

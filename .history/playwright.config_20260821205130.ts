
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['@testdino/playwright', { token: process.env.TESTDINO_TOKEN }],
  ],
});

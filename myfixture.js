// // fixtures.js
// exports.test = base.test.extend({
//   credentials: async ({}, use) => {
//     await use({
//       username: 'varsha.bangera+productowner@auxosolutions.io',
//       password: 'Shetty@12345'
//     });
//   }
// });

// const base = require('@playwright/test');
// const { LoginPage } = require('./LoginPage');

// exports.test = base.test.extend({
//   loginPage: async ({ page }, use) => {
//     const loginPage = new LoginPage(page);
//     await use(loginPage);
//   },
// });
// exports.expect = base.expect;

// test-report/Fixture/myfixture.js

import { test as base, expect as baseExpect } from '@playwright/test';
import { LoginPage } from '../tests/pages/LoginPage.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  credentials: async ({}, use) => {
    await use({
      username: "varsha.bangera+productowner@auxosolutions.io",
      password: "Shetty@12345"
    });
  },
});

export const expect = baseExpect;


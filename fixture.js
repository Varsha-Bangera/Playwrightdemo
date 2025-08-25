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

import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  credentials: async ({}, use) => {
    const creds = {
      username: 'varsha.bangera+productowner@auxosolutions.io',
      password: 'Shetty@12345'
    };
    await use(creds);
  }
});

export const expect = base.expect;

// // pages/LoginPage.js
// export class LoginPage {
//   constructor(page) {
//     this.page = page;
//     this.usernameInput = page.locator("//input[@id='username']");
//     this.passwordInput = page.locator("//input[@id='password']");
//     this.loginButton = page.locator("//button[@id='login']");
//   }

//   async goto() {
//     await this.page.goto("https://carlyle-uatx.unqork.io/?style=carlyle-rebrand#/auth/login");
//   }

//   async login(username, password) {
//     await this.usernameInput.fill(username);
//     await this.passwordInput.fill(password);
//     await this.loginButton.click();
//   }
// }

// class LoginPage {
//   constructor(page) {
//     this.page = page;
//     this.username = page.locator("//input[@id='username']");
//     this.password = page.locator("//input[@id='password']");
//     this.loginBtn = page.locator("input[value='Login']");
//   }

//   async goto() {
//     await this.page.goto("https://carlyle-uatx.unqork.io/?style=carlyle-rebrand#/auth/login");
//   }

//   async login(username, password) {
//     await this.username.fill(username);
//     await this.password.fill(password);
//     await this.loginBtn.click();
//   }
// }

// module.exports = { LoginPage };

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("//input[@id='username']");
    this.password = page.locator("//input[@id='password']");
    this.loginBtn = page.locator("input[value='Login']");
  }

  async goto() {
    await this.page.goto("https://carlyle-uatx.unqork.io/?style=carlyle-rebrand#/auth/login");
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}

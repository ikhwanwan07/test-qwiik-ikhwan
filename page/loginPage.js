import { loginLocators } from '../locators/loginLocator.js';


export class LoginPage {
  constructor(page) {
    this.page = page;
    // Hubungkan locator dari file eksternal ke objek Playwright
    this.usernameInput = page.getByPlaceholder(loginLocators.usernameField);
    this.passwordInput = page.getByPlaceholder(loginLocators.passwordField);
    this.submitButton = page.getByText(loginLocators.loginBtn);
  }

  async login(user, pass) {
    await this.page.goto('/');
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.submitButton.click();
  }
}

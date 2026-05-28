import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("//input[@name='username']");
    }

    get inputPassword () {
        return $("//input[@name='password']");
    }

    get btnSubmit () {
        return $("//input[@value='Log In']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.waitForDisplayed({ timeout: 5000 });
        await this.inputUsername.setValue(username);
        await this.inputPassword.waitForDisplayed({ timeout: 5000 });
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForDisplayed({ timeout: 5000 });
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        await browser.deleteAllCookies();
        await super.open('index');
        await this.inputUsername.waitForDisplayed({ timeout: 5000 });
    }
}

export default new LoginPage();

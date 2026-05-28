import Page from "./page.js";
// Importa las funciones necesarias de WebDriverIO
/**
 * sub page containing specific selectors and methods for a specific page
 */

class TransferPage extends Page {
  /**
   * define selectors using getter methods
   */

  get inputAmount() {
    return $("//input[@id='amount']");
  }

  get inputFrom() {
    return $('select[id="fromAccountId"]');
  }

  get inputTo() {
    return $('select[id="toAccountId"]');
  }

  get btnSubmit() {
    return $('input[type="submit"]');
  }

  async transfer(amount, from, to) {
    await this.inputAmount.waitForDisplayed({ timeout: 5000 });
    await this.inputAmount.setValue(amount);
    await this.inputFrom.waitForDisplayed({ timeout: 5000 });
    await this.inputFrom.selectByVisibleText(from);
    await this.inputTo.waitForDisplayed({ timeout: 5000 });
    await this.inputTo.selectByVisibleText(to);
    await this.btnSubmit.waitForDisplayed({ timeout: 5000 });
    await this.btnSubmit.click();
  }

  async open() {
    await super.open("transfer");
    await this.inputAmount.waitForDisplayed({ timeout: 10000 });
  }

  get successfulTransferTitle() {
    return $("#rightPanel > div > div > h1");
  }
}

export default new TransferPage();

import Page from "./page.js";

class LoanPage extends Page {
  get amount() {
    return $("//input[@id='amount']");
  }

  get downPayment() {
    return $("//input[@id='downPayment']");
  }

  get fromAccountId() {
    return $("//select[@id='fromAccountId']");
  }

  get applyNowButton() {
    return $("//input[@value='Apply Now']");
  }

  get loanStatus() {
    return $("//td[@id='loanStatus']");
  }

  get deniedMessage() {
    return $("//p[contains(text(),'We cannot grant a loan in that amount with your av')]");
  }

  async open() {
    await super.open("requestloan");
    await this.amount.waitForDisplayed({ timeout: 5000 });
  }

  async applyForLoan(amount, downPayment, fromAccountId) {
    await this.amount.waitForDisplayed({ timeout: 5000 });
    await this.amount.setValue(amount);

    await this.downPayment.waitForDisplayed({ timeout: 5000 });
    await this.downPayment.setValue(downPayment);

    await this.fromAccountId.waitForDisplayed({ timeout: 5000 });
    await this.fromAccountId.selectByVisibleText(fromAccountId);

    await this.applyNowButton.waitForDisplayed({ timeout: 5000 });
    await this.applyNowButton.click();
  }
}

export default new LoanPage();
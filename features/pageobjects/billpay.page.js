import Page from "./page.js";

class BillPayPage extends Page {
  get payeeName() {
    return $("//input[@name='payee.name']");
  }

  get payeeStreet() {
    return $("//input[@name='payee.address.street']");
  }

  get payeeCity() {
    return $("//input[@name='payee.address.city']");
  }

  get payeeState() {
    return $("//input[@name='payee.address.state']");
  }

  get payeeZipCode() {
    return $("//input[@name='payee.address.zipCode']");
  }

  get payeePhone() {
    return $("//input[@id='4ea8136f-ea89-458c-8267-4405ef3f896a']");
  }

  get payeeAccountNumber() {
    return $("//input[@name='payee.accountNumber']");
  }

  get verifyAccount() {
    return $("//input[@name='verifyAccount']");
  }

  get amount() {
    return $("//input[@name='amount']");
  }

  get fromAccountId() {
    return $("//select[@name='fromAccountId']");
  }

  get sendPaymentButton() {
    return $("//input[@value='Send Payment']");
  }

  get successMessage() {
    return $("//h1[normalize-space()='Bill Payment Complete']");
  }

  get verifyAccountMismatchMessage() {
    return $("//span[@id='validationModel-verifyAccount-mismatch']");
  }

  open() {
    return super.open("billpay");
  }

  async fillBillPaymentForm(data) {
    await this.payeeName.waitForDisplayed({ timeout: 5000 });
    await this.payeeName.setValue(data.name);

    await this.payeeStreet.waitForDisplayed({ timeout: 5000 });
    await this.payeeStreet.setValue(data.street);

    await this.payeeCity.waitForDisplayed({ timeout: 5000 });
    await this.payeeCity.setValue(data.city);

    await this.payeeState.waitForDisplayed({ timeout: 5000 });
    await this.payeeState.setValue(data.state);

    await this.payeeZipCode.waitForDisplayed({ timeout: 5000 });
    await this.payeeZipCode.setValue(data.zipCode);

    await this.payeePhone.waitForDisplayed({ timeout: 5000 });
    await this.payeePhone.setValue(data.phone);

    await this.payeeAccountNumber.waitForDisplayed({ timeout: 5000 });
    await this.payeeAccountNumber.setValue(data.accountNumber);

    await this.verifyAccount.waitForDisplayed({ timeout: 5000 });
    await this.verifyAccount.setValue(data.verifyAccount);

    await this.amount.waitForDisplayed({ timeout: 5000 });
    await this.amount.setValue(data.amount);

    await this.fromAccountId.waitForDisplayed({ timeout: 5000 });
    await this.fromAccountId.selectByVisibleText(data.fromAccountId);
  }

  async sendPayment() {
    await this.sendPaymentButton.waitForDisplayed({ timeout: 5000 });
    await this.sendPaymentButton.click();
  }
}

export default new BillPayPage();
import Page from "./page.js";

class OverviewPage extends Page {
  get overviewPanel() {
    return $("//div[@id='showOverview']");
  }

  get accountType() {
    return $("//td[@id='accountType']");
  }

  get balance() {
    return $("//td[@id='balance']");
  }

  get availableBalance() {
    return $("//td[@id='availableBalance']");
  }

  accountLink(accountId) {
    return $(`//a[normalize-space()='${accountId}']`);
  }

  async openOverview() {
    await super.open("overview");
    await this.overviewPanel.waitForDisplayed({ timeout: 20000 });
  }

  async selectAccount(accountId) {
    await this.overviewPanel.waitForDisplayed({ timeout: 20000 });
    await this.accountLink(accountId).waitForDisplayed({ timeout: 20000 });
    await this.accountLink(accountId).click();
    await this.accountType.waitForDisplayed({ timeout: 20000 });
    await this.balance.waitForDisplayed({ timeout: 20000 });
    await this.availableBalance.waitForDisplayed({ timeout: 20000 });
  }

  async getAccountDetails() {
    return {
      accountType: await this.accountType.getText(),
      balance: await this.balance.getText(),
      availableBalance: await this.availableBalance.getText(),
    };
  }
}

export default new OverviewPage();
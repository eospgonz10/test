import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page.js";
import BillPayPage from "../pageobjects/billpay.page.js";

Given(/^I am logged in for bill pay$/, async () => {
  await LoginPage.open();
  await LoginPage.login("john", "demo");
});

Given(/^I am on the bill pay page$/, async () => {
  await BillPayPage.open();
});

When(
  /^I submit a bill payment with account (\d+) and verifyAccount (\d+)$/, 
  async (accountNumber, verifyAccount) => {
    await BillPayPage.fillBillPaymentForm({
      name: "john",
      street: "CR 1 # 1 -1",
      city: "Cali",
      state: "valle del cauca",
      zipCode: "05004",
      phone: "3226222222",
      accountNumber,
      verifyAccount,
      amount: "200",
      fromAccountId: "17118",
    });

    await BillPayPage.sendPayment();
  }
);

Then(/^I should see the bill payment success message$/, async () => {
  await expect(BillPayPage.successMessage).toBeExisting();
  await expect(BillPayPage.successMessage).toHaveTextContaining(
    "Bill Payment Complete"
  );
});

Then(/^I should see the verify account mismatch message$/, async () => {
  await expect(BillPayPage.verifyAccountMismatchMessage).toBeExisting();
});
import { Given, When, Then } from "@wdio/cucumber-framework";

import LoanPage from "../pageobjects/loan.page.js";

Given(/^I am on the request loan page$/, async () => {
  await LoanPage.open();
});

When(
  /^I apply for a loan with amount (.*), down payment (.*) and from account (.*)$/,
  async (amount, downPayment, fromAccountId) => {
    await LoanPage.applyForLoan(amount, downPayment, fromAccountId);
  }
);

Then(/^I should see the loan status Approved$/, async () => {
  await expect(LoanPage.loanStatus).toBeExisting();
  await expect(LoanPage.loanStatus).toHaveTextContaining("Approved");
});

Then(/^I should see the loan status Denied$/, async () => {
  await expect(LoanPage.loanStatus).toBeExisting();
  await expect(LoanPage.loanStatus).toHaveTextContaining("Denied");
});

Then(/^I should see the denied loan message$/, async () => {
  await expect(LoanPage.deniedMessage).toBeExisting();
});
import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page.js";
import OverviewPage from "../pageobjects/overview.page.js";

Given(/^I am logged in with john and demo$/, async () => {
  await LoginPage.open();
  await LoginPage.login("john", "demo");
});

Given(/^I am on the overview page$/, async () => {
  await OverviewPage.openOverview();
});

When(/^I select the account (\d+)$/, async (accountId) => {
  await OverviewPage.selectAccount(accountId);
});

Then(/^I should see the account details$/, async () => {
  const accountDetails = await OverviewPage.getAccountDetails();

  expect(accountDetails.accountType.trim().length).toBeGreaterThan(0);
  expect(accountDetails.balance.trim().length).toBeGreaterThan(0);
  expect(accountDetails.availableBalance.trim().length).toBeGreaterThan(0);
});
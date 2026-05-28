import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from '../pageobjects/login.page.js';

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

//LOGIN
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a text saying (.*)$/, async (message) => {
  const title = $('.title');

  await title.waitForDisplayed({ timeout: 5000 });
  await browser.waitUntil(
    async () => (await title.getText()).includes(message),
    {
      timeout: 10000,
      timeoutMsg: `Expected title to contain ${message}`,
    }
  );
});
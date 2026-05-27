Feature: Transfer funds between accounts

  Background:
    Given I login with username christg and password christg123

  Scenario Outline: As a user, I want to transfer funds between accounts
    Given I login in my account and go to transfer funds page
    When I transfer <amount> from the account <fromAccountId> to the account <toAccountId>
    Then The message should be <message>

    Examples:
      | fromAccountId | toAccountId | amount | message            |
      |         21780 |       21891 |    999 | Transfer Complete! |

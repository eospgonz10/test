Feature: Consulta de estados

  Background:
    Given I am logged in with john and demo
    And I am on the overview page

  Scenario Outline: Ver detalle de una cuenta
    When I select the account <accountId>
    Then I should see the account details

    Examples:
      | accountId |
      | 13344     |
      | 13455     |
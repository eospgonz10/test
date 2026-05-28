Feature: Consulta de estados

  Background:
    Given I login with username john and password demo
    And I am on the overview page

  Scenario Outline: Ver detalle de una cuenta
    When I select the account <accountId>
    Then I should see the account details

    Examples:
      | accountId |
      | 13344     |
      | 13455     |
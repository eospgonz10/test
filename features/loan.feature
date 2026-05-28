Feature: Préstamos

  Background:
    Given I login with username john and password demo
    And I am on the request loan page

  Scenario: Solicitar un préstamo aprobado
    When I apply for a loan with amount 200, down payment 5 and from account 12345
    Then I should see the loan status Approved

  Scenario: Solicitar un préstamo rechazado
    When I apply for a loan with amount 55511111116666444444, down payment 1 and from account 12345
    Then I should see the loan status Denied
    And I should see the denied loan message
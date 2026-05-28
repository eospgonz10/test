Feature: Pagos

  Background:
    Given I am logged in for bill pay
    And I am on the bill pay page

  Scenario: Realizar un pago exitoso
    When I submit a bill payment with account 13344 and verifyAccount 13344
    Then I should see the bill payment success message

  Scenario: Validar error por cuentas diferentes
    When I submit a bill payment with account 13344 and verifyAccount 13455
    Then I should see the verify account mismatch message
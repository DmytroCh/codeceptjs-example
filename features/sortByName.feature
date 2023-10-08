Feature: Sort Products by Name

  @Validation_3
  Scenario: Sort products by name as a standard user

    Given I am logged in as a 'standard_user'
    When I sort the products by name
    Then I validate that the sorting is correct
Feature: Sort Products by Price

  @Validation_4
  Scenario: Sort products by price as a standard user

    Given I am logged in as a 'standard_user'
    When I sort the products by price
    Then I validate that the sorting by Price is correct
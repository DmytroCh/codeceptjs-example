Feature: Add Item to Cart

  @Validation_2
  Scenario: Add an item to the cart

    Given I am logged in as a 'problem_user'
    When I find and click on an item by name
    And I add it to the cart from the item page
    And I go to the cart
    Then I validate that the item was added
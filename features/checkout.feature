Feature: Shopping Cart and Checkout

  @Validation_1
  Scenario Outline: Remove an item from the cart and complete the purchase

    Given I am logged in as a "<user_role>"
    When I add all items to the cart
    And I go to the cart
    And I find the third item by name and remove it from the cart
    Then I validate in the Checkout Overview that it only contains the items that I want to purchase
    And I validate in the Checkout Overview that the Item Total is correct
    Then I finish the purchase
    And I validate that the website confirms the order
    Examples:
    | user_role |
    |    standard_user |
    |    performance_glitch_user |

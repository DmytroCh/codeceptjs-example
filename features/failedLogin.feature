Feature: Login as a locked_out_user and capture failure screenshots

  @Validation_5
  Scenario: Log in as a locked_out_user and validate failure
    Given I am on the login page
    When I try to log in as a 'locked_out_user'
    Then I expect the login validation to fail
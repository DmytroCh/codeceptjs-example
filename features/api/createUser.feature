Feature: Create a New User

  @Api_validation_3
  Scenario: Create a New User and Validate Response
    When I send a POST request to the endpoint '/api/users' to create new user
    Then the response code should be '201'
    And the user's creation date should be today

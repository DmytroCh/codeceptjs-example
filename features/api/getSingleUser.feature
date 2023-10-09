Feature: Get Single User

  @Api_validation_2
  Scenario: Get User 13 and Validate Not Found
    When I send a GET request to the endpoint '/api/users/13'
    Then the response code should be '404'
    And the response should contain the message 'User not found'

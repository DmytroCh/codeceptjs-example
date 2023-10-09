Feature: Login user

  @Api_validation_7
  Scenario: Try to log in without password
    When I send a POST request to the endpoint '/api/login' to login
    Then the response code should be '400'
    And the response should contain the message 'Missing password'

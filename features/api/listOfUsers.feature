Feature: Get a List of Users

  @Api_validation_1
  Scenario: Retrieve and Validate User List
    When I send a GET request to the endpoint '/api/users?per_page=100'
    Then the response code should be '200'
    And I print all users with odd ID numbers

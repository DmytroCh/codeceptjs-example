Feature: Update a User

  @Api_validation_4
  Scenario Outline: Update a User and Validate Response
    Given I have a user with the ID 1
    When I send a PUT request to the endpoint '/api/users/1', user name: "<user_name>", user job: "<user_job>"
    Then the response code should be '200'
    And the response body should match user name: "<user_name>", user job: "<user_job>"
    Examples:
    | user_name | user_job |
    | morpheus | zion resident |

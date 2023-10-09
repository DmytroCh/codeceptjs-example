Feature: Get Multiple Users

  @Api_validation_6
  Scenario Outline: Get 10 users and validate status
    When I send a GET request to the endpoint '/api/users/<user_id>'
    Then the response code should be '<status_code>'
    Examples:
    | user_id | status_code |
    | 1 | 200 |
    | 2 | 200 |
    | 3 | 200 |
    | 4 | 200 |
    | 5 | 200 |
    | 6 | 200 |
    | 7 | 200 |
    | 8 | 200 |
    | 9 | 200 |
    | 10 | 200 |
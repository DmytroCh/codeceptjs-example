Feature: Validate Response Time with Parameterized Delay

  @Api_validation_5
  Scenario Outline: Get a List of Users with Delay Parameter
    Given I have a delay parameter set to '<delay_value>' seconds
    When I send a GET request to the endpoint '/api/users?delay=<delay_value>'
    Then the response time should be no longer than '<expected_response_time>' second
    Examples:
      | delay_value | expected_response_time |
      | 0           | 1                      |
      | 3           | 1                      |

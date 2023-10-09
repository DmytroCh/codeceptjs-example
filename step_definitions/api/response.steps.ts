const { I } = inject();

When("I send a GET request to the endpoint {string}", async (path: string) => {
  // From "features/api/listOfUsers.feature" {"line":5,"column":5}
  await I.sendGetRequest(path);
});

Then('the response code should be {string}', (code: string) => {
  // From "features/api/listOfUsers.feature" {"line":6,"column":5}
  I.seeResponseCodeIs(Number(code));
});

Then('I print all users with odd ID numbers', () => {
  // From "features/api/listOfUsers.feature" {"line":7,"column":5}
  I.seeResponseValidByCallback(({ data }) => {
    const users = data.data;
    console.log(users.filter(user => user.id % 2 > 0));
  });

});

Then('the response should contain the message {string}', (message: string) => {
  // From "features/api/getSingleUser.feature" {"line":7,"column":5}
  I.seeResponseContainsJson({});
});

When("I send a POST request to the endpoint {string} to create new user", async (path: string) => {
  // From "features/api/createUser.feature" {"line":5,"column":5}
  await I.sendPostRequest(path, {
    "name": "morpheus",
    "job": "leader"
  });
});

Then("the user's creation date should be today", () => {
  // From "features/api/createUser.feature" {"line":7,"column":5}
  const today = new Date().toJSON().slice(0, 10);
  I.seeResponseValidByCallback(({ data, status, expect }) => {
    expect(data.createdAt).to.include(today);
  });
});

const { I } = inject();

let startRequestTime;
let endRequestTime;

When("I send a GET request to the endpoint {string}", async (path: string) => {
  // From "features/api/listOfUsers.feature" {"line":5,"column":5}
  startRequestTime = new Date();
  await I.sendGetRequest(path);
  endRequestTime = new Date();
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

Given('I have a user with the ID 1', () => {
  // From "features/api/updateUser.feature" {"line":5,"column":5}
});

Given('I have a delay parameter set to {string} seconds', () => {
  // From "features/api/updateUser.feature" {"line":5,"column":5}
});

When('I send a PUT request to the endpoint {string}, user name: {string}, user job: {string}', async (path: string, name: string, job: string) => {
  // From "features/api/updateUser.feature" {"line":6,"column":5}
  await I.sendPutRequest(path, {
    "name": name,
    "job": job
  });});

Then('the response body should match user name: {string}, user job: {string}', (name: string, job: string) => {
  // From "features/api/updateUser.feature" {"line":8,"column":5}
  I.seeResponseValidByCallback(({ data, status, expect }) => {
    expect(data.name).to.eql(name);
    expect(data.job).to.eql(job);
  });
});

Then('the response time should be no longer than {string} second', (expetedResponseTime: string) => {
  // From "features/api/updateUser.feature" {"line":8,"column":5}
  const diff = Math.abs(endRequestTime.getTime() - startRequestTime.getTime())/1000;
  I.seeResponseValidByCallback(({ data, status, expect }) => {
    expect(diff).to.be.below(Number(expetedResponseTime));
  });
});

Cypress.Commands.add("login", () => {
  cy.request("POST", "/auth/local", {
    identifier: "suongphan37@gmail.com",
    password: "123456789",
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("jwt");
    window.localStorage.setItem("jwt", response.body.jwt);
    window.localStorage.setItem("userId", response.body.user.id);
  });
});

describe("test api login", () => {
  it("login success", () => {
    cy.request("POST", "/auth/local", {
      identifier: "suong@gmail.com",
      password: "123456789",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("jwt");
      expect(response.body.user).to.be.an("object");
    });
  });
  it("login failed", () => {
    cy.request({
      method: "POST",
      url: "/auth/local",
      body: {
        username: "invalid-username",
        password: "invalid-password",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
    });
  });
});

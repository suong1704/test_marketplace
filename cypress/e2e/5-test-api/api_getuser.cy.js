describe("test api get user ", () => {
  before(() => {
    cy.login()
  });
  it("success", () => {
    cy.request({
      method: "GET",
      url: "/user/getUser",
      auth: {
        bearer: window.localStorage.getItem("jwt"),
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("user");
      expect(response.body.user).to.be.an("object");
      expect(response.body.user).to.have.property("_id");
    });
  });
  it("failed - headers invalid or incorrect", () => {
    cy.request({
      method: "GET",
      url: "/user/getUser",
      auth: {
        bearer: "authToken",
      },
      failOnStatusCode: false,
      
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property("error");
    });
  });
  it("no headers", () => {
    cy.request({
      method: "GET",
      url: "/user/getUser",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.eq("Not loged in");
    });
  });
});

describe("test api get user by id", () => {
  beforeEach (() => {
    cy.login()
  });
  it("success is me", () => {
    cy.request({
      method: "GET",
      url: "/user/getUserById/126",
      auth: {
        bearer: window.localStorage.getItem("jwt"),
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("user");
      expect(response.body.user).to.be.an("object");
      expect(response.body.user).to.have.property("_id");
      expect(response.body.user.isMe).to.eq(true);
      cy.log(response)
    });
  });
  it("success not me", () => {
    cy.request({
      method: "GET",
      url: "/user/getUserById/122",
      auth: {
        bearer: window.localStorage.getItem("jwt"),
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("user");
      expect(response.body.user).to.be.an("object");
      expect(response.body.user).to.have.property("_id");
      expect(response.body.user.isMe).to.eq(false);
      cy.log(response);
    });
  });
  it("failed - token invalid or incorrect", () => {
    cy.request({
      method: "GET",
      url: "/user/getUserById/122",
      auth: {
        bearer: "invalidtoken",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property("error");
      cy.log(response);

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
      cy.log(response);

    });
  });
});

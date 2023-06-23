describe("test api edit user's profile", () => {
  beforeEach(() => {
     cy.login();
  });
  it("success -  token and userid is match", () => {
    cy.log(window.localStorage.getItem("jwt"));
    cy.request({
      method: "PUT",
      url: "/user/edit-profile/126",
      body: {
        name: "suongphan",
        phoneNumber: "+359888888888",
        email: 'suongphan37@gmail.com'
      },
      auth: {
        bearer: window.localStorage.getItem("jwt"),
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response);
    });
  });
  it("failed -  token and userid is not match", () => {
    cy.log(window.localStorage.getItem("jwt"));
    cy.request({
      method: "PUT",
      url: "/user/edit-profile/122",
      body: {
        phoneNumber: "+359888888808",
      },
      auth: {
        bearer: window.localStorage.getItem("jwt"),
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).have.property("error");
      cy.log(response);
    });
  });

  it("no headers", () => {
    cy.request({
      method: "PUT",
      body: {
        name: "suongphan",
        phoneNumber: "+359888888888",
        email: "suongphan@gmail.com",
      },
      url: "/user/edit-profile/126",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.eq("Not loged in");
      cy.log(response);
    });
  });
});

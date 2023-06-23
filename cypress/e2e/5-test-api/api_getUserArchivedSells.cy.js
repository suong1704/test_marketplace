describe("tess get user archive products", () => {
  beforeEach(() => {
   cy.login()
  });
  it("no header", () => {
    cy.request({
      method: "GET",
      url: `/products/sells/archived`,
      failOnStatusCode: false,
    }).then((response) => {
       expect(response.status).to.eq(200);
       expect(response.body).to.have.property("message");
       expect(response.body.message).to.eq(
         "Cannot read properties of undefined (reading '_id')"
       );
       cy.log("response", response);
    });
  });
  it("valid header", () => {
    cy.request({
      method: "GET",
      url: `/products/sells/archived`,
      auth: {
        bearer: window.localStorage.getItem("jwt"),
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("sells");
      expect(response.body).to.have.property("user");
      expect(String(response.body.user.id)).to.eq(
        window.localStorage.getItem("userId")
      );
      expect(response.body.sells).to.be.an("array");
      cy.log("response", response);
    });
  });
  it("invalid header", () => {
    cy.request({
      method: "GET",
      url: `/products/sells/archived`,
      auth: {
        bearer: "authToken",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property("error");
      cy.log("response", response);
    });
  });
});

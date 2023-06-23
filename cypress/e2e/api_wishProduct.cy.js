let productId = "80";
describe("test api wish product", () => {
  beforeEach(() => {
    cy.login()
  });
  it("no header", () => {
    cy.request({
      method: "GET",
      url: `/products/wish/${productId}`,
      
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
    cy.log(window.localStorage.getItem("jwt"));
    cy.request({
      method: "GET",
      url: `/products/wish/${productId}`,

      auth: {
        bearer: window.localStorage.getItem("jwt"),
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("msg");
      cy.log(response);
    });
  });
  it("invalid header", () => {
    cy.request({
      method: "GET",
      url: `/products/wish/${productId}`,
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

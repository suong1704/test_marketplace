describe("tess get user whish list", () => {
  beforeEach(() => {
   cy.login()
  });
  it("no header", () => {
    cy.request({
      method: "GET",
      url: `/products/wishlist/getWishlist`,
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
      url: `/products/wishlist/getWishlist`,
      auth: {
        bearer: window.localStorage.getItem("jwt"),
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("wishlist");
      expect(response.body.wishlist).to.be.an("array");
      cy.log("response", response);
    });
  });
  it("invalid header", () => {
    cy.request({
      method: "GET",
      url: `/products/wishlist/getWishlist`,
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


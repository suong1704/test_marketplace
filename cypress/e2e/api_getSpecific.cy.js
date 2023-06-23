let authToken = "";
let productId = "80";
describe("tess get specific products", () => {
  before(() => {
    cy.request("POST", "/auth/local", {
      identifier: "suong@gmail.com",
      password: "123456789",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("jwt");
      authToken = response.body.jwt;
      cy.log(authToken);
    });
  });
  it("no header", () => {
    cy.request({
      method: "GET",
      url: `/products/specific/${productId}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("isAuth");
      expect(response.body).to.have.property("_id");
      expect(response.body._id).to.eq(productId);
      expect(response.body.isAuth).to.eq(false);
      cy.log(response);
    });
  });
   it("have header", () => {
     cy.request({
       method: "GET",
       url: `/products/specific/${productId}`,
       auth: {
         bearer: authToken,
       },
       failOnStatusCode: false,
     }).then((response) => {
       expect(response.status).to.eq(200);
       expect(response.body).to.have.property("isAuth");
       expect(response.body).to.have.property("_id");
       expect(response.body._id).to.eq(productId);
       expect(response.body.isAuth).to.eq(true);
       cy.log(response);
     });
   });
});

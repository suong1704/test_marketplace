let userId = 122;
describe("test api get user active sells", () => {
  it("no header", () => {
    cy.request({
      method: "GET",
      url: `/products/sells/active/${userId}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("sells");
      expect(response.body).to.have.property("user");
      expect(response.body.user.id).to.eq(userId);
      expect(response.body.sells).to.be.an('array');
      cy.log("response", response);
    });
  });
});

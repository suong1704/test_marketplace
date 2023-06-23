describe('tesst api get all products', () => {
  it('success', () => {
    cy.request({
      method: "GET",
      url: "/products",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('products');
      cy.log(response);
    });
  })
})
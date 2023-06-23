describe("tesst api get products by category", () => {
  const categories = [
    "properties",
    "auto",
    "electronics",
    "clothes",
    "toys",
    "garden",
  ];
  categories.forEach(category => 
    it(category, () => {
      cy.request({
        method: "GET",
        url: "/products/${category}",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("products");
        cy.log(response);
      });
  })
  )
});

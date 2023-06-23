describe('test search product', () => {
  it('success ', () => {
    const searchTerms = "Áo";
    cy.visit("http://localhost:3000/");
    cy.get('input[name="search"]').type(searchTerms)
    cy.get(".card").contains(".card-title", searchTerms).should("be.visible");
  })
  it("failed ", () => {
    const searchTerms = "Áo1";
    cy.visit("http://localhost:3000/");
    cy.get('input[name="search"]').type(searchTerms);
    cy.should("not.have.class", "card");
  });
})
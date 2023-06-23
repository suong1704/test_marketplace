describe('test wish product', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#nav-sign-in").click();
    cy.get("#formBasicEmail").type("suong@gmail.com");
    cy.get("#formBasicPassword").type("123456789");
    cy.get(".col-lg-12").click();
    cy.url().should("include", "/");
  });
  it("wish product", () => {
    cy.get(".card").first().click();
    cy.get("#heartIconDetails").click();
    
  });
})
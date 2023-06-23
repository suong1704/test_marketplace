describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#nav-sign-in").click();
    cy.get("#formBasicEmail").type("suong@gmail.com");
    cy.get("#formBasicPassword").type("123456789");
    cy.get(".col-lg-12").click();
    cy.url().should("include", "/");
  });
  it("active product", () => {
    cy.get("#navImg").click();
    cy.get(".dropdown-menu").contains("Profile").click();
    cy.get("#archived-sells").click();
    cy.get("#enableIcon").first().click();
    cy.get(".btn-success").click();
    cy.location("pathname").should("eq", "/details");
  });
})
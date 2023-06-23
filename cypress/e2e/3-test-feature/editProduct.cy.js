describe("test edit product", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#nav-sign-in").click();
    cy.get("#formBasicEmail").type("suong@gmail.com");
    cy.get("#formBasicPassword").type("123456789");
    cy.get(".col-lg-12").click();
    cy.url().should("include", "/");
  });
  it("edit product", () => {
    const description = "This is description";
    cy.get("#navImg").click();
    cy.get(".dropdown-menu").contains("Profile").click();
    cy.get(".card").first().click();
    cy.get("#edit-icon > a").click();
    cy.get('textarea[name="description"]').clear().type(description);
    cy.get(".col-lg-12").click();
    cy.contains(".tab-pane", description).should("be.visible");
  });
});

describe("View other user’s profile", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#nav-sign-in").click();
    cy.get("#formBasicEmail").type("suong@gmail.com");
    cy.get("#formBasicPassword").type("123456789");
    cy.get(".col-lg-12").click();
    cy.url().should("include", "/");
  });
  it("View other user’s profile", () => {
    cy.wait(1000);
    // cy.get(".card").first().click();
    cy.get(".infinite-scroll-component > :nth-child(8)").click();
    cy.wait(1000);
    cy.get(".product-details-seller > a")
      .click()
      .invoke("attr", "href")
      .then((e) => {
        const href = e;
        cy.log(`The 3 value is: ${href}`);
        cy.location("pathname").should("eq", href);
      });
    cy.get("#btnContact").should("be.visible");
  });
});
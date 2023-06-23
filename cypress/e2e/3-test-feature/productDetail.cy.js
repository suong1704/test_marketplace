describe("view product detail", () => {
  it("No login", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
    cy.get(".card > a")
      .first()
      .click()
      .invoke("attr", "href")
      .then((e) => {
        cy.log(`The href value is: ${e}`);
        const href = e;
        cy.log(`The 3 value is: ${href}`);
        cy.location("pathname").should("eq", href);
        cy.get('#guest-msg').should("be.visible");
      });
  });
  it("login", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#nav-sign-in").click();
    cy.get("#formBasicEmail").type("suong@gmail.com");
    cy.get("#formBasicPassword").type("123456789");
    cy.get(".col-lg-12").click();
    cy.location("pathname").should("eq", "/");

    cy.wait(500);
    cy.get(".card > a")
      .first()
      .click()
      .invoke("attr", "href")
      .then((e) => {
        cy.log(`The href value is: ${e}`);
        const href = e;
        cy.log(`The 3 value is: ${href}`);
        cy.location("pathname").should("eq", href);
        cy.get('[href="/profile/122"]').should("be.visible");
      });
  });
});

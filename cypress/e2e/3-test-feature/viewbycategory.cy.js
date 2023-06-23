describe("view product by category", () => {
  it("View properties", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
    cy.get("#properties")
      .parent()
      .click()
      .invoke("attr", "href")
      .then((e) => {
        const href = e;
        cy.log(`The 3 value is: ${href}`);
        cy.location("pathname").should("eq", href);
      });
    cy.wait(2000);
  });
  it("View clothes", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
    cy.get("#clothes")
      .parent()
      .click()
      .invoke("attr", "href")
      .then((e) => {
        const href = e;
        cy.log(`The 3 value is: ${href}`);
        cy.location("pathname").should("eq", href);
      });
    cy.wait(2000);
  });
});

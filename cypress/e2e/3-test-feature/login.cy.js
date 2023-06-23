describe("Test login", () => {
  it("Login success", () => {
    cy.visit("http://localhost:3000/");
    // redirect to login
    cy.get("#nav-sign-in").click();
    cy.get("#formBasicEmail").type("suong@gmail.com");
    cy.get("#formBasicPassword").type("123456789");
    cy.get(".col-lg-12").click();
    cy.location("pathname").should("eq", "/");
  });
  it("Login failed", () => {
    cy.visit("http://localhost:3000/");
    // redirect to login
    cy.get("#nav-sign-in").click();
    cy.get("#formBasicEmail").type("suong1@gmail.com");
    cy.get("#formBasicPassword").type("1234567891");
    cy.get(".col-lg-12").click();
    cy.location("pathname").should("eq", "/auth/login");
    cy.contains("Invalid username or password").should("be.visible");
  });
});

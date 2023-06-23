describe("test register", () => {
  it("register success", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#nav-sign-up").click();
    cy.get("#forName").type("suongphan12");
    cy.get("#formGridGender").select('1');
    cy.get(":nth-child(2) > .col-lg-12 > .form-control").type("+359888888889");
    cy.get("#formBasicEmail").type('suong12@gmail.com');
    cy.get("#formBasicPassword").type('123456789');
    cy.get(":nth-child(4) > :nth-child(2) > .form-control").type('123456789');
    cy.get(".btnAuth").click();
    cy.location("pathname").should("eq", "/auth/login");

  });
  it("register fail", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#nav-sign-up").click();
    cy.get("#forName").type("suong");
    cy.get("#formGridGender").select("1");
    cy.get(":nth-child(2) > .col-lg-12 > .form-control").type("+35988888888");
    cy.get("#formBasicEmail").type("suong@gmailcom");
    cy.get("#formBasicPassword").type("123456789");
    cy.get(":nth-child(4) > :nth-child(2) > .form-control").type("1234567890");
    cy.get(".btnAuth").click();
    cy.location("pathname").should("eq", "/auth/register");
    cy.get(".fade").should("be.visible");
  });
});

describe('template spec', () => {
 beforeEach(() => {
   cy.visit("http://localhost:3000/");
   cy.get("#nav-sign-in").click();
   cy.get("#formBasicEmail").type("suong@gmail.com");
   cy.get("#formBasicPassword").type("123456789");
   cy.get(".col-lg-12").click();
   cy.url().should("include", "/");
 });
 it("eidt profile", () => {
  const phone = "+359888888880";
   cy.get("#navImg").click();
   cy.get(".dropdown-menu").contains("Profile").click();
   cy.wait(1000);
   cy.get("#edit-icon a").click();
   cy.get("input[name=phoneNumber]").clear().type(phone);
   cy.wait(500);
   cy.get("#edit-profile-icons > :nth-child(1)").click();
   cy.get("p").contains(phone).should('be.visible');

 });
})
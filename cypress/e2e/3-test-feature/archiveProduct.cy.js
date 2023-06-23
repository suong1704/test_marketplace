describe('test archive product', () => {
 beforeEach(() => {
   cy.visit("http://localhost:3000/");
   cy.get("#nav-sign-in").click();
   cy.get("#formBasicEmail").type("suong@gmail.com");
   cy.get("#formBasicPassword").type("123456789");
   cy.get(".col-lg-12").click();
   cy.url().should("include", "/");
 });
  it("Archive product", () => {
     cy.get("#navImg").click();
     cy.get(".dropdown-menu").contains("Profile").click();
     cy.get(".card > a")
       .first()
       .click()
       .invoke("attr", "href")
       .then((e) => {
         const href = e;
         cy.log(`The 3 value is: ${href}`);
         cy.get("#archive-icon").click();
         cy.get(".btn-success").click();
         cy.location("pathname").should("eq", href);
       });;
  });
})
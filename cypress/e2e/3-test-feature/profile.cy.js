describe('test view profile', () => {
   beforeEach(() => {
     cy.visit("http://localhost:3000/");
     cy.get("#nav-sign-in").click();
     cy.get("#formBasicEmail").type("suong@gmail.com");
     cy.get("#formBasicPassword").type("123456789");
     cy.get(".col-lg-12").click();
     cy.url().should("include", "/");
   });
   it("view profile", () => {
     cy.get("#navImg").click();
     cy.get(".dropdown-menu")
     .contains("Profile")
     .click()
     .invoke("attr", "href")
     .then((e) => {
       const href = e;
       cy.location("pathname").should("eq", href);
       cy.log(`The 3 value is: ${href}`);
       cy.wait(1000);
       // view active products
       cy.get("#active-sells").click();
         cy.get(".heading").contains("Active Sells").should('be.visible');
         cy.wait(1000);
         // view archive products
         cy.get("#archived-sells").click();
         cy.get(".heading").contains("Archive").should("be.visible");

         cy.wait(1000);
         // view wish list
         cy.get("#wishlist").click();
         cy.get(".heading").contains("Wishlist").should("be.visible");

       });
   });
})
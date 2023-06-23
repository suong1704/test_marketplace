
const sizes = ["iphone-6", "ipad-2", [1024, 768]];

describe("responsive", () => {
  sizes.forEach((size) => {
    it(`Should display on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }
      cy.visit("http://localhost:3000/");
      
      cy.scrollTo("bottom", {duration: 3000});
      cy.scrollTo("top", { duration: 3000 });
    });

    it(`Should display profile page on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }
      cy.visit("http://localhost:3000/");
      
      // Login
      cy.get("#nav-sign-in").click();
      cy.get("#formBasicEmail").type("suong@gmail.com");
      cy.get("#formBasicPassword").type("123456789");
      cy.get(".col-lg-12").click();
      cy.url().should("include", "/");
      // visit profile page 
      cy.get("#navImg").click();
      cy.get(".dropdown-menu").contains("Profile").click();

      cy.scrollTo("bottom", { duration: 3000 });
      cy.scrollTo("top", { duration: 3000 });
    });

    it(`Should display product detail page on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }
      cy.visit("http://localhost:3000/");

      // visit product detail page
      cy.get(".card").first().click();
      cy.scrollTo("bottom", { duration: 3000 });
      cy.scrollTo("top", { duration: 3000 });
    });
  });
});

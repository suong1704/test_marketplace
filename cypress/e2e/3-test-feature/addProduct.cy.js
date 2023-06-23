describe('Add new product', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
      cy.get("#nav-sign-in").click();
      cy.get("#formBasicEmail").type("suong@gmail.com");
      cy.get("#formBasicPassword").type("123456789");
      cy.get(".col-lg-12").click();
      cy.url().should("include", "/");
    });
  it("Add product success", () => {
    cy.get("#addButton").click();
    cy.get("#formGridTitle").type("Ghế gỗ");
    cy.get("#formGridPrice").type('100');
    cy.get('textarea[name="description"]').type("This is description");
    cy.get("#formGridCity").type('QN');
    cy.get("#formGridCategory");
    cy.get("select").select(1);
    cy.get("#formGridImage").selectFile(
      "C:/Users/ptthusuong/Downloads/ghế.jfif",
      {
        force: true,
      }
    );
    cy.get(".col-lg-12").click();
    cy.url().should("include", "/details");
  
  });
  it("Add product failed", () => {
    cy.get("#addButton").click();
    cy.get("#formGridTitle").type("Ao");
    cy.get("#formGridPrice").type("100");
    cy.get('textarea[name="description"]').type("no des");
    cy.get("#formGridCity").type("QN");
    cy.get("#formGridCategory");
    cy.get("select").select(1);
    cy.get("#formGridImage").selectFile(
      "C:/Users/ptthusuong/Downloads/ghế.jfif",
      {
        force: true,
      }
    );
    cy.get(".col-lg-12").click();
    cy.url().should("include", "/add-product");
    cy.get(".fade").should("be.visible");
  });
  
})
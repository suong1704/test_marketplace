let productId = "77";
describe("test api edit product", () => {
  beforeEach(() => {
    cy.login()
  });
   it("no header", () => {
     cy.request({
       method: "PATCH",
       url: `/products/edit/${productId}`,
       body: {
         title: "Áo ghile",
         price: "3000000",
         description: "asasasassssssssssa",
         city: "BinhDinh",
         category: "properties",
       },
       failOnStatusCode: false,
     }).then((response) => {
       expect(response.status).to.eq(200);
       expect(response.body).to.have.property("message");
       expect(response.body.message).to.eq(
         "Cannot read properties of undefined (reading '_id')"
       );
       cy.log("response", response);
     });
   });
   it("id from header and userid from product is match", () => {
    cy.log(window.localStorage.getItem("jwt"))
     cy.request({
       method: "PATCH",
       url: `/products/edit/${productId}`,
       body: {
         title: "Áo ghile",
         price: "3000000",
         description: "asasasassssssssssa",
         city: "BinhDinh",
         category: "properties",
       },
       auth: {
         bearer: window.localStorage.getItem("jwt"),
       },
       failOnStatusCode: false,
     }).then((response) => {
       expect(response.status).to.eq(200);
       expect(response.body).to.have.property("message");
       expect(response.body.message).to.eq("Updated!");
       cy.log(response);
     });
   });
   it("id from header and userid from product not match", () => {
     cy.request({
       method: "PATCH",
       url: `/products/edit/80`,
       body: {
         title: "Áo ghile",
         price: "3000000",
         description: "asasasassssssssssa",
         city: "BinhDinh",
         category: "properties",
       },
       auth: {
         bearer: window.localStorage.getItem("jwt"),
       },
       failOnStatusCode: false,
     }).then((response) => {
       expect(response.status).to.eq(200);
       expect(response.body).to.have.property("error");
       expect(response.body.error).to.be.an("array");
       cy.log(response);
     });
   });
});

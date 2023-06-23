let authToken = "";
let productId = "80";
describe("test api edit product", () => {
  before(() => {
    cy.request("POST", "/auth/local", {
      identifier: "suong@gmail.com",
      password: "123456789",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("jwt");
      authToken = response.body.jwt;
      cy.log(authToken);
    });
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
    cy.log(authToken);
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
        bearer: authToken,
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
      url: `/products/edit/77`,
      body: {
        title: "Áo ghile",
        price: "3000000",
        description: "asasasassssssssssa",
        city: "BinhDinh",
        category: "properties",
      },
      auth: {
        bearer: authToken,
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

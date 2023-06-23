describe("test api create product", () => {
  beforeEach(() => {
    cy.login()
  });
  it("no header", () => {
    cy.request({
      method: "POST",
      url: `/products/create`,
      body: {
        title: "Ghế Gỗ",
        price: "1000000",
        description: "",
        city: "BinhDinh",
        category: "properties",
        image: "",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.eq(
        "Cannot read properties of undefined (reading '_id')"
      );
      cy.log("response", response);
    });
  });
  it("have header - correct body", () => {
    cy.request({
      method: "POST",
      url: `/products/create`,
      body: {
        title: "ghees",
        price: "1000000",
        description: "this is description",
        city: "BinhDinh",
        category: "properties",
        image: "",
      },
      auth: {
        bearer: window.localStorage.getItem("jwt"),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("productId");
      cy.log(response);
    });
  });
  it("have header but incrrect body", () => {
    cy.request({
      method: "POST",
      url: `/products/create`,
      body: {
        title: "Ao",
        price: "1000000",
        description: "",
        city: "BinhDinh",
        category: "properties",
        image: "",
      },
      auth: {
        bearer: window.localStorage.getItem("jwt"),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("error");
      expect(response.body.error).to.be.an("array");
      cy.log(response);
    });
  });
});

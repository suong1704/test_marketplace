 describe("test api register", () => {
   it("register success", () => {
     cy.request("POST", "/auth/registerUser", {
       username: "suong1234",
       lastName: "",
       gender: "Nữ",
       phoneNumber: "+359888889688",
       email: "suong1234@gmail.com",
       password: "123456789",
       repeatPassword: "123456789",
     }).then((response) => {
       expect(response.status).to.eq(200);
       expect(response.body).to.have.property("jwt");
       expect(response.body.user).to.be.an("object");
     });
   });
   it("register failed", () => {
     cy.request({
       method: "POST",
       url: "/auth/registerUser",
       body: {
         username: "suong",
         lastName: "",
         gender: "Nữ",
         phoneNumber: "+359888889688",
         email: "suong@gmail.com",
         password: "123456789",
         repeatPassword: "123456789",
       },
       failOnStatusCode: false,
     }).then((response) => {
       expect(response.body).to.have.property("error");
       expect(response.body.error).to.be.a("array");
     });
   });
 });

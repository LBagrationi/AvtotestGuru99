describe("Registration", () => {
   beforeEach(() => {
    cy.visit("https://demo.guru99.com/");
 });

 it("Home Page should be correct", () => {
   cy.get("#site-name").contains("a", "Demo Site").should("be.visible");
   cy.get('img[alt="Guru99 Demo Sites"]').should("be.visible");
   cy.get(".navbar").should("be.visible");
 });

 it("Registration via e-mail", () => {
  cy.get("input[name='emailid']").scrollIntoView().should("be.visible")
   .type("demoguru99@mailforspam.com");
  cy.get("input[name='btnLogin']").scrollIntoView().should("be.visible")
   . click();
  });
});
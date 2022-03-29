describe("home page", () => {
    beforeEach(() => {
     cy.visit("https://demo.guru99.com/telecom/index.html");
});

it("Telecom project page shoul be correct", () => {
    cy.get("#site-name").contains("a", "Demo Site").should("be.visible");
    cy.get('img[alt="Guru99 Demo Sites"]').should("be.visible");
    cy.get(".navbar").should("be.visible");
    cy.get(".left > [href='#menu']").should("be.visible");
    cy.get(".left > .logo").should("be.visible"); 
    cy.get('section[id="one"]').find('img').should('have.attr', 'src', 'images/pic01.jpg')
    .should("be.visible");

    cy.get('a[href*="billing.php"]').contains('Pay Billing').should("be.visible");
    cy.get('a[href*="addtariffplans.php"]').contains('Add Tariff Plan').should("be.visible");
    cy.get('a[href*="assigntariffplantocustomer.php"]').contains('Add Tariff Plan to Customer')
    .should("be.visible") 
    cy.get('a[href*="addcustomer.php"]').contains('Add Customer').should("be.visible").click();
});

it("Add Customer page should be correct", () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.url().should('eq','https://demo.guru99.com/telecom/addcustomer.php');

    cy.get("#site-name").contains("a", "Demo Site").should("be.visible");
    cy.get(".navbar").should("be.visible");
    cy.get('img[alt="Guru99 Demo Sites"]').should("be.visible");
    cy.get(".left > [href='#menu']").should("be.visible");
    cy.get(".left > .logo").should("be.visible");
    cy.get("h1").contains("Add Customer").should("be.visible");

    cy.get("input[name='fname']").scrollIntoView().should("be.visible")
    .type("Lali");
    cy.get("input[name='lname']").scrollIntoView().should("be.visible")
    .type("Bagrationi");
    cy.get("input[name='emailid']").scrollIntoView().should("be.visible")
    .type("lalibagrationi98@gmail.com");
    cy.get("textarea[name='addr']").scrollIntoView().should("be.visible")
    .type("International123456");
    cy.get("input[name='telephoneno']").scrollIntoView().should("be.visible")
    .type("000000000000");
    cy.get("input[value='Reset']").scrollIntoView().should("be.visible")
    . click();

    cy.get('input#done').should('exist');
    cy.get ('input#pending').should('exist');
    cy.get('label[for="done"]').click();
    cy.get('input#done').should('be.checked');
    cy.get('#pending').should('not.be.checked');
    cy.get('label[for="pending"]').click();
    cy.get('input#pending').should('be.checked');
    cy.get('input#done').should('not.be.checked');

    cy.get("input[name='fname']").scrollIntoView().should("be.visible")
    .type("Lali");
    cy.get("input[name='lname']").scrollIntoView().should("be.visible")
    .type("Bagrationi");
    cy.get("input[name='emailid']").scrollIntoView().should("be.visible")
    .type("lalibagrationi98@gmail.com");
    cy.get("textarea[name='addr']").scrollIntoView().should("be.visible")
    .type("International123456");
    cy.get("input[name='telephoneno']").scrollIntoView().should("be.visible")
    .type("000000000000");
    cy.get("input[name='submit']").scrollIntoView().should("be.visible")
    . click();

    cy.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    cy.get("h1").contains('Access Details to Guru99 Telecom').scrollIntoView().should("be.visible")
    cy.get('a[href*="index.html"]').contains('Home').click()
    cy.url().should('eq','https://demo.guru99.com/telecom/index.html');
    

}); 
});

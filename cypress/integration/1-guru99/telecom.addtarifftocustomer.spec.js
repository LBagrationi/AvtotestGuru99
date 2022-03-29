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

    cy.get('a[href*="addcustomer.php"]').contains('Add Customer').should("be.visible");
    cy.get('a[href*="billing.php"]').contains('Pay Billing').should("be.visible");
    cy.get('a[href*="addtariffplans.php"]').contains('Add Tariff Plan').should("be.visible");
    cy.get('a[href*="assigntariffplantocustomer.php"]').contains('Add Tariff Plan to Customer')
    .should("be.visible").click();
});

it("Add Tariff to Customer", () => {
    cy.visit("https://demo.guru99.com/telecom/assigntariffplantocustomer.php");
    cy.url().should('eq','https://demo.guru99.com/telecom/assigntariffplantocustomer.php');

    cy.get("#site-name").contains("a", "Demo Site").should("be.visible");
    cy.get(".navbar").should("be.visible");
    cy.get('img[alt="Guru99 Demo Sites"]').should("be.visible");
    cy.get(".left > [href='#menu']").should("be.visible");
    cy.get(".left > .logo").should("be.visible");
    cy.get("h1").contains("Add Tariff Plan to Customer").should("be.visible");
    cy.get("input[name='customer_id']").scrollIntoView().should("be.visible").
    type("089996");
    cy.get("input[name='submit']").scrollIntoView().should("be.visible").
    click();

    cy.url().should('eq','https://demo.guru99.com/telecom/assigntariffplantocustomer.php');

    cy.get("h3").contains("Welcome to add customer tariff plan Lali").scrollIntoView().should("be.visible");
    cy.get('p[style="text-align:right"]').scrollIntoView().contains('ACTIVE').should("be.visible");
    cy.get("h2").contains("Approved Tariff Plans").scrollIntoView().should("be.visible");
    cy.get("h2").contains("Unapproved Tariff Plans").scrollIntoView().should("be.visible");
    cy.get('table[class="alt"]').should("be.visible");

    /*
    cy.get ('input#sele').should('exist');
    cy.get('label[for="sele"]').check();
    cy.get('input#sele').should('be.checked'); 
    */

    cy.get('input[name="submit"]').scrollIntoView().should("be.visible").click();
    cy.url().should('eq','https://demo.guru99.com/telecom/inserttariffplantocustomer.php');
    cy.get("h2").contains("Congratulation Tariff Plan assigned").scrollIntoView().should("be.visible");
    cy.get('a[href*="index.html"]').contains('Home').click()
    cy.url().should('eq','https://demo.guru99.com/telecom/index.html');

});
});

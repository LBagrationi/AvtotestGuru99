describe("Telecom / Adding tariff plan", () => {
    beforeEach(() => {
     cy.visit("https://demo.guru99.com/telecom/index.html");
});

it("Telecom project should be correct", () => {
    cy.get("#site-name").contains("a", "Demo Site").should("be.visible");
    cy.get("img").should("be.visible")
    cy.get(".navbar").should("be.visible");
    cy.get(".left > [href='#menu']").should("be.visible");
    cy.get(".left > .logo").should("be.visible"); 
    cy.get(".image > img").should("be.visible");

    cy.get('a[href*="billing.php"]').contains('Pay Billing').should("be.visible");
    cy.get('a[href*="assigntariffplantocustomer.php"]').contains('Add Tariff Plan to Customer')
    .should("be.visible") 
    cy.get('a[href*="addcustomer.php"]').contains('Add Customer').should("be.visible");
    cy.get('a[href*="addtariffplans.php"]').contains('Add Tariff Plan').should("be.visible").click();

});

it("Correct Adding Tariff Plan", () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
    cy.url().should('eq','https://demo.guru99.com/telecom/addtariffplans.php');

    cy.get("#site-name").contains("a", "Demo Site").should("be.visible");
    cy.get(".navbar").should("be.visible");
    cy.get('img[alt="Guru99 Demo Sites"]').should("be.visible");
    cy.get(".left > [href='#menu']").should("be.visible");
    cy.get(".left > .logo").should("be.visible");
    cy.get("h1").contains("Add Tariff Plans").should("be.visible");

    cy.get("input[name='rental']").scrollIntoView().should("be.visible")
    .type("88888");
    cy.get("input[name='local_minutes']").scrollIntoView().should("be.visible")
    .type("99999");
    cy.get("input[name='inter_minutes']").scrollIntoView().should("be.visible")
    .type("77755");
    cy.get("input[name='sms_pack']").scrollIntoView().should("be.visible")
    .type("87651");
    cy.get("input[name='minutes_charges']").scrollIntoView().should("be.visible")
    .type("123");
    cy.get("input[name='inter_charges']").scrollIntoView().should("be.visible")
    .type("123");
    cy.get("input[name='sms_charges']").scrollIntoView().should("be.visible")
    .type("123");
    cy.get("input[value='Reset']").scrollIntoView().should("be.visible")
    .click();

    cy.get("input[name='rental']").scrollIntoView().should("be.visible")
    .type("88888");
    cy.get("input[name='local_minutes']").scrollIntoView().should("be.visible")
    .type("99999");
    cy.get("input[name='inter_minutes']").scrollIntoView().should("be.visible")
    .type("77755");
    cy.get("input[name='sms_pack']").scrollIntoView().should("be.visible")
    .type("87651");
    cy.get("input[name='minutes_charges']").scrollIntoView().should("be.visible")
    .type("123");
    cy.get("input[name='inter_charges']").scrollIntoView().should("be.visible")
    .type("123");
    cy.get("input[name='sms_charges']").scrollIntoView().should("be.visible")
    .type("123");
    cy.get("input[name='submit']").scrollIntoView().should("be.visible")
    .click();

    cy.url().should('eq','https://demo.guru99.com/telecom/addtariffplans.php');
    cy.get('a[href*="index.html"]').contains('Home').click();
    cy.url().should('eq','https://demo.guru99.com/telecom/index.html');
});

});
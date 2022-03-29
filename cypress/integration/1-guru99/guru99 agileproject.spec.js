describe("home page", () => {
    beforeEach(() => {
     cy.visit("https://demo.guru99.com/Agile_Project/Agi_V1/");
});

it("Home Page should be correct", () => {
    cy.get("#site-name").contains("a", "Demo Site").should("be.visible");
    cy.get('img[alt="Guru99 Demo Sites"]').should("be.visible");
    cy.get(".navbar").should("be.visible");
    cy.get("h2.barone").should("be.visible");
    cy.get("h4.barone").scrollIntoView().should("be.visible");
    /*
    UserID : 1303
    Password : Guru99
    */
});

it("Reset credentials", () => {
    cy.get("input[name='uid']").scrollIntoView().should("be.visible")
     .type("1303");
    cy.get("input[name='password']").scrollIntoView().should("be.visible")
     .type("Guru99")
    cy.get("input[name='btnReset']").scrollIntoView().should("be.visible")
     .click();
});

it("Login via access credentials", () => {
    cy.get("input[name='uid']").scrollIntoView().should("be.visible")
     .type("1303");
    cy.get("input[name='password']").scrollIntoView().should("be.visible")
     .type("Guru99");
    cy.get("input[name='btnLogin']").scrollIntoView().should("be.visible")
     . click(); 

    cy.url().should('eq','https://demo.guru99.com/Agile_Project/Agi_V1/customer/Customerhomepage.php');
    cy.get("#site-name").contains("a", "Demo Site").should("be.visible");
    cy.get('img[alt="Guru99 Demo Sites"]').should("be.visible");
    cy.get(".navbar").should("be.visible");
    cy.get("h2.barone").should("be.visible");
    cy.get(".heading3").scrollIntoView().should("be.visible");

    cy.get('table[class="layout1"]').find('img').should('have.attr', 'src');

    cy.get('a[href*="Customerhomepage.php"]').contains('Customer').scrollIntoView().should("be.visible");
    cy.get('a[href*="MiniStatementInput.php"]').contains('Mini Statement').scrollIntoView().should("be.visible");
    cy.get('a[href*="Logout.php"]').contains('Log out').scrollIntoView().should("be.visible")
    .click();
});
});

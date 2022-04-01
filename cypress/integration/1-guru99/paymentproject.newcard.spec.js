describe("Payment gateway", () => {
    beforeEach(() => {
     cy.visit("https://demo.guru99.com/payment-gateway/index.php");
});

it("Payment page is correct", () => {
    cy.get("#site-name").contains("a", "Demo Site").should("be.visible");
    cy.get('img[alt="Guru99 Demo Sites"]').should("be.visible");
    cy.get(".navbar").should("be.visible");
    cy.get('a[href*="purchasetoy.php"]').contains('Guru99 Payment Gateway').should("be.visible");
    cy.get('a[href*="purchasetoy.php"]').contains('Cart').should("be.visible");
    cy.get('a[href*="cardnumber.php"]').contains('Generate Card Number').should("be.visible");
    cy.get('a[href*="check_credit_balance.php"]').contains('Check Credit Card Limit').should("be.visible");

    cy.get("h2").contains("Mother Elephant With Babies Soft Toy").scrollIntoView().should("be.visible");
    cy.get('div[class="6u 12u$(small)"]').find('img').should('have.attr', 'src', 'images/Toy.jpg')
    cy.get("form > .row > :nth-child(2)").scrollIntoView().should("be.visible");
    cy.get('div[class="6u 12u$(small)"]').contains('h3', 'Price: $20').scrollIntoView().should("be.visible");
    cy.get("h4").contains("Quantity: ").scrollIntoView().should("be.visible");
    cy.get("select[name='quantity']").scrollIntoView().should("be.visible").select('1');
    cy.get('input[value="Buy Now"]').scrollIntoView().should("be.visible");
});

it('New card creation', function () {
        
        cy.get('a[href*="cardnumber.php"]').invoke('removeAttr', 'target').eq(1).click();
        cy.url()
            .should('include', 'https://demo.guru99.com/payment-gateway/cardnumber.php');
        cy.get('h2').should('have.text', 'Here is your New Card');
        cy.get('img').should('have.attr', 'src', 'images/card/temp-94.jpg')
    .should("be.visible");
    cy.get('h4').should('have.text', 'Card Number:');
});
});

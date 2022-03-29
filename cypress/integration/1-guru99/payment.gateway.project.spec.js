describe("home page", () => {
    beforeEach(() => {
     cy.visit("https://demo.guru99.com/payment-gateway/index.php");
});

it("Payment Gateway Project page must be correct", () => {
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
    cy.get("select[name='quantity']").scrollIntoView().should("be.visible").select('2');
    cy.get('input[value="Buy Now"]').scrollIntoView().should("be.visible").click();

    cy.url().should('eq','https://demo.guru99.com/payment-gateway/process_purchasetoy.php');

    cy.get("#site-name").contains("a", "Demo Site").should("be.visible");
    cy.get('img[alt="Guru99 Demo Sites"]').should("be.visible");
    cy.get(".navbar").should("be.visible");
    cy.get('a[href*="purchasetoy.php"]').contains('Guru99 Payment Gateway').should("be.visible");
    cy.get('a[href*="purchasetoy.php"]').contains('Cart').should("be.visible");
    cy.get('a[href*="cardnumber.php"]').contains('Generate Card Number').should("be.visible");
    cy.get('a[href*="check_credit_balance.php"]').contains('Check Credit Card Limit').should("be.visible");

    cy.get("h2").contains("Payment Process").scrollIntoView().should("be.visible");
    cy.get('div[class="6u 12u$(xsmall)"]').contains('Pay Ammount').scrollIntoView().should("be.visible");
    cy.get('div[class="6u 12u$(xsmall)"]').contains('$40.00').scrollIntoView().should("be.visible");

    cy.get("h4").contains("We accept").scrollIntoView().should("be.visible");
    cy.get('div[class="6u$ 12u$(xsmall)"]').find('img')
    .should('have.attr', 'src', 'images/visa.png','images/mastercard.png', 'images/american.png', 'images/discover.png' )
    .should("be.visible");

/*card number adding*/
cy.get('input[name="card_nmuber"]').scrollIntoView().should("be.visible")
.type(4669403929179109);
cy.get('select[name="month"]').scrollIntoView().should("be.visible")
.select('11');
cy.get('select[name="year"]').scrollIntoView().should("be.visible")
.select('2021');
cy.get('input[name="cvv_code"]').scrollIntoView().should("be.visible")
.type(572);

cy.get("input[name='submit']").scrollIntoView().should("be.visible")
    . click();
cy.get("h2").contains("Payment successfull!").scrollIntoView().should("be.visible");
cy.get("table[class='alt access']").scrollIntoView().should("be.visible");
cy.get('a[href*="purchasetoy.php"]').contains('Home').click();
cy.url().should('eq','https://demo.guru99.com/payment-gateway/process_purchasetoy.php');
});
});
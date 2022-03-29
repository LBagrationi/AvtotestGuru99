Cypress.Commands.add('getUserNameAndPassword', () => {
    cy.contains("td", "User ID :").then(jqElement => {
        const userId = jqElement.parent().find('td').eq(1).text();
    cy.contains("td", "Password :").then(jqElement => {
        const password = jqElement.parent().find('td').eq(1).text();
        return {
            userId,
            password
        };
        });
    });
});


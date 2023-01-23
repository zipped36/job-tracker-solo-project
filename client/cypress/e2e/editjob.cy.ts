describe('A existing   Job can be edit', () => {
  it('Sucesfully login test and it can edit a job application', () => {
    cy.visit('/');
    cy.get('.emailField').type('Shahid@gmail.com');
    cy.get('.passwordField').type('shahidcub201');
    cy.get('.siginButton').click();
    cy.get('.editIcon').first().click();

    cy.get('.statusName').select('Accepted');
    cy.get('.submitButton').click({ force: true });
  });
});

describe('A existing   Job can be edit', () => {
  it('Sucesfully login  and it can should delete the first application', () => {
    cy.visit('/');
    cy.get('.emailField').type('Shahid@gmail.com');
    cy.get('.passwordField').type('shahidcub201');
    cy.get('.siginButton').click();
    cy.get('.deleteIcon').first().click();
  });
});

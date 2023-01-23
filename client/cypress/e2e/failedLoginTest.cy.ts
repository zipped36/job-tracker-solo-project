describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('equal', 'Job Tracker');
  });
  it('Should navigate to the register page clicking on the signUpbutton', () => {
    // cy.get('.regButton').should('have.text', 'Signup');
    cy.get('.regButton').click().visit('/register');
  });
  it('Failed login test', () => {
    cy.get('.emailField').type('shahid@gmail.com');
    cy.get('.passwordField').type('123456');
    cy.get('.siginButton').click();
    cy.contains('User Not Found');
  });
});

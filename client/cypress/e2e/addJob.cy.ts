describe('New Job can be created', () => {
  it('Sucesfully login test and login also have a Add Job buttton, and submit a new job application', () => {
    cy.visit('/');
    cy.get('.emailField').type('test@gmail.com');
    cy.get('.passwordField').type('123456');
    cy.get('.siginButton').click();
    cy.get('.addJob').click();
    cy.get('.companyName').type('Selise');
    cy.get('.positionName').type('jr Devloper');
    cy.get('.locationName').type('Dhaka');
    cy.get('.salaryName').type('2000');
    cy.get('.jobNatureName').type('fulltime');
    cy.get('.empType').type('full');

    cy.get('.detailsName').type('new job');
    cy.get('.jobLinkName').type('www.this.com');
    cy.get('.dateTime').type('2023-12-12');
    cy.get('.statusName').select('Pending');
    cy.get('.submitButton').click({ force: true });
  });
  // it('Should be a Add Job button', () => {
  //   cy.visit('/home');
  // });
});

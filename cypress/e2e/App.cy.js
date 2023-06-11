// https://on.cypress.io/api

describe('Muscode App', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Muscode App');
  });
});

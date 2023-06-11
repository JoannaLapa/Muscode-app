// https://on.cypress.io/api

describe('Muscode App', () => {
  it('have a h1 with a proper text', () => {
    cy.visit('/');
    cy.contains('h1', 'Muscode App');
  });
});

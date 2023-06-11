describe('TodoList', () => {
  it('has a h2 with a proper text', () => {
    cy.visit('/');
    cy.contains('h2', 'Lista todo');
  });
});

describe('Adding a new Todo', () => {
  it('the new todo editor should support text input', () => {
    cy.visit('/');
    cy.get('[data-test-id="new-todo-add"]').type('Just learn').should('have.value', 'Just learn');
  });

  it('Error message should not be visible when page render', () => {
    cy.visit('/');
    cy.get('[data-test-id="new-todo-add-error"]').should('not.exist');
  });

  it('New todo should be added when the user clicks enter', () => {
    cy.visit('/');
    cy.get('[data-test-id="new-todo-add"]').type('Just learn{enter}');
    cy.get('[data-test-id="todo-ul"]')
      .contains('Just learn')
      .should('be.visible')
  });

  it('Error message should be visible when the user want to save empty input', () => {
    cy.visit('/');
    cy.get('[data-test-id="new-todo-add"]').type('{enter}');
    cy.get('[data-test-id="new-todo-add-error"]').should('be.visible');
  });
});


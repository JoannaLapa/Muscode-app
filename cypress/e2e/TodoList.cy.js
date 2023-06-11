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
});

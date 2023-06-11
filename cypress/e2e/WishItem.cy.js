describe('WishItem', () => {
  it('EditWishItem should not be visible when page render', () => {
    cy.visit('/');
    cy.get('[data-test-id="edit-wish-item"]').should('not.exist');
  });
  
  //code below doesn't work
  // it('EditWishItem should be visible when user click on WishItem', () => {
  //   cy.get('[data-test-id="wish-item-1"]').click();
  //   cy.get('[data-test-id="edit-wish-item"]').should('be.visible');
  // });
});

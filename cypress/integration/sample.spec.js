describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('localhost:8080');
    cy.get('button').contains('genre').click();
    cy.get('button').contains('genre').should('have.css', 'background-color', 'rgb(246, 82, 97)');
  });
});

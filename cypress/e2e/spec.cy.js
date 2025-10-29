describe('Open flashcard page', () => {
  it('should load the homepage', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Category');
  })
})
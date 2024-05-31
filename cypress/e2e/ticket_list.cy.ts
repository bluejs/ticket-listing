describe('Ticket List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the first ticket correctly', () => {
    cy.contains('Subject 1').should('be.visible');
    cy.contains('Description for ticket 1').should('be.visible');
  });

  it('should handle scrolling', () => {
    cy.contains('Subject 1').should('be.visible');

    cy.get('[data-testid="ticket-list"]').scrollTo(0, 500)
      .then((list) => {
        expect(list.scrollTop()).to.equal(500);
      });
  });

  it('should display all tickets when scrolled to the top', () => {
    cy.get('[data-testid="ticket-list"]').scrollTo('top');
    cy.contains('Subject 1').should('be.visible');
  });

  it('should display all tickets when scrolled to the bottom', () => {
    cy.get('[data-testid="ticket-list"]').scrollTo('bottom');
    cy.contains('Subject 9999').should('be.visible');
  });
});

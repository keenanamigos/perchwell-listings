describe('App Header', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should have a header', () => {
        const header = cy.get('[data-e2e="app-header"]');
        header.should('be.visible');
    });

    it('should have six anchor elements in the header', () => {
        const headerItems = cy.get('a:visible');
        headerItems.should('have.length', 6);
    });
});
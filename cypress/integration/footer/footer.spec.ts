describe('Footer', () => {
    it('should have a footer', () => {
        cy.visit('/');
        const footer = cy.get('footer');
        footer.should('be.visible');
    });
});
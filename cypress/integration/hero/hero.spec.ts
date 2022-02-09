describe('Hero Image', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should have a hero image', () => {
        const heroImage = cy.get('[data-e2e="hero-image"]');
        heroImage.should('be.visible').and('have.css', 'background-image');
    });

    it('should have the correct text overlaying the hero image', () => {
        const heroText = cy.get('[data-e2e="hero-text"]');
        heroText.should('contain.text', 'Find a home that suits your lifestyle');
    });
});
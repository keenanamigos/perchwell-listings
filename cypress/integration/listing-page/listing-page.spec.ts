describe('Listing Page', () => {
    describe('Successful API call', () => {
        beforeEach(() => {
            cy.visit('/');
        });
    
        it('should show a loading spinner', () => {
            const spinner = cy.get('mat-spinner');
            spinner.should('be.visible');
        });
    
        it('should show a listing when it exists', () => {
            const listingCards = cy.get('mat-card');
            listingCards.should('have.length.at.least', 1);
        });
    });

    describe('API Failures', () => {
        it('should show the error text when the API call fails', () => {
            cy.intercept('GET', '**/api/*', { statusCode: 400 });
            cy.visit('/');
            
            const errorBlock = cy.get('[data-e2e="error-block"]');
            errorBlock.should('be.visible');
            
            const errorBlockChildren = errorBlock.children();

            const errorText = errorBlockChildren.first();
            errorText.should('contain.text', 'There was an error while trying to retrieve the listings. Please click the button below to retry.');
            
            const retryButton = errorText.next().children().first();
            retryButton.should('be.visible').and('have.class', 'retry-button');
        });

        it('shoud show the "No Listing" text when the API call succeeds but no listings are returned', () => {
            cy.intercept('GET', '**/api/*', { statusCode: 200, total: 1, listings: [] });
            cy.visit('/');

            const noListingsFound = cy.get('[data-e2e="no-listings"]');
            noListingsFound.should('be.visible').and('contain.text', 'No listings found.');
        });
    });
});
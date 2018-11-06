/*eslint-disable*/
// https://docs.cypress.io/api/introduction/api.html
Cypress.cy.onUncaughtException = function () { }

describe('Test Selection', () => {

    it('delete selection', () => {
      cy.visit(Cypress.env("HOST"))
      .addSelections()
      .get('[data-cy=delete-selection]')
      .first()
      .click()
      .get('[data-cy=selection]')
      .should('have.length', 2)
    });
    
});
/*eslint-enable*/

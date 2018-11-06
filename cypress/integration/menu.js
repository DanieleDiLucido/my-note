/*eslint-disable*/
// https://docs.cypress.io/api/introduction/api.html
Cypress.cy.onUncaughtException = function () { }

describe('Test Menu', () => {

  it('clear all', () => {
    cy.visit(Cypress.env("HOST"))
    .addSelections()
    .get('[data-cy=clear-all]').click()
    .get('[data-cy=selection]')
    .should('not.exist');
  });

});
/*eslint-enable*/
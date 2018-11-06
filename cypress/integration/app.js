/*eslint-disable*/
// https://docs.cypress.io/api/introduction/api.html
Cypress.cy.onUncaughtException = function () { }

describe('test App', () => {

  it('visit', () => {
    cy.visit(Cypress.env("HOST"))
    .contains('h1','My note')
  });

});
/*eslint-enable*/
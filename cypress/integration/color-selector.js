/*eslint-disable*/
// https://docs.cypress.io/api/introduction/api.html
Cypress.cy.onUncaughtException = function () { }

describe('Test Color selector', () => {

  beforeEach(() => {
    cy.visit(Cypress.env("HOST"));
  });

  it('change color', () => {   
    const initialColor = 'rgb(250, 208, 195)';
    const finalColor= 'rgb(212, 196, 251)'

    cy.get('[data-cy=color-selector]')
    .should('have.css', 'background-color')
    .and('eq', initialColor)

    cy.get('[data-cy=color-selector]')
    .click()
    .get('.github-picker div')
    .last()
    .click()

    cy.get('[data-cy=color-selector]')
    .should('have.css', 'background-color')
    .and('eq', finalColor)

    cy.addSelection()
    .get('[data-cy=selection-color]')
    .should('have.css', 'background-color')
    .and('eq', finalColor)

  });

  it('selections with differen colors', () => {
    const initialColor = 'rgb(250, 208, 195)';
    const finalColor= 'rgb(212, 196, 251)'
    cy.addSelection()
    cy.get('[data-cy=color-selector]')
    .click()
    .get('.github-picker div')
    .last()
    .click()
    cy.addSelection(' 🦄 🦄 ')

    cy.get('[data-cy=selection-color]')
    .first()
    .should('have.css', 'background-color')
    .and('eq', initialColor)

    cy.get('[data-cy=selection-color]')
    .last()
    .should('have.css', 'background-color')
    .and('eq', finalColor)
  });

});
/*eslint-enable*/
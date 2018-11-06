/*eslint-disable*/
// https://docs.cypress.io/api/introduction/api.html
Cypress.cy.onUncaughtException = function () { }

describe('Test Editor', () => {

  beforeEach(() => {
    cy.visit(Cypress.env("HOST"));
  });

  it('type text', () => {
    cy.get('.ql-editor').type('Hello, World') 
  });

  it('select text', () => {
    cy.get('.ql-editor')
    .type('Hello, World')
    .type('{selectall}')
  });

  it('add selection - button', () => {
    cy.get('.ql-editor')
    .type('Hello, World')
    .type('{selectall}')
    cy.get('[data-cy=add-selection]').click()
    cy.get('[data-cy=selection]')
  });

  it('add selection - shortcut1', () => {
    cy.get('.ql-editor')
    .type('Hello, World')
    .type('{selectall}')
    .type('{meta}{enter}')
    cy.get('[data-cy=selection]')
  });
  
  it('add selection - shortcut2', () => {
    cy.get('.ql-editor')
    .type('Hello, World')
    .type('{selectall}')
    .type('{ctrl}{enter}')
    cy.get('[data-cy=selection]')
  });

  it('add selections', () => {
    cy.get('.ql-editor')
    .type('Hello, World')
    .type('{selectall}')
    .type('{meta}{enter}')
    .type('some extra text')
    .type('{selectall}')
    .type('{meta}{enter}')
    .type('awesome 🦄')
    .type('{selectall}')
    .type('{meta}{enter}')    
    cy.get('[data-cy=selection]')
    .should('have.length', 3)
  });

});
/*eslint-enable*/
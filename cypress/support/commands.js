// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/*eslint-disable*/
Cypress.Commands.add("addSelection", (text) => { 

  cy.get('.ql-editor')
    .type((text || 'Hello World'))
    .type('{selectall}')
    .type('{meta}{enter}')    
 })
Cypress.Commands.add("addSelections", (originalFn, url, options) => { 
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
 })
 /*eslint-enable*/

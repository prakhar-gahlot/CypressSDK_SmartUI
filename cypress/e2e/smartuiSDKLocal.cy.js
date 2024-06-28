/// <reference types="cypress" />

describe('example SmartUI test', () => {
  beforeEach(() => {

    cy.visit('https://www.lambdatest.com')
  })

  it('test smartuiSnapshot', () => {
    cy.smartuiSnapshot('todo');
  })
})

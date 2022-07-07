/// <reference types="cypress" />

describe('Work with Iframe', () => {
  // before(() => {
  //   cy.visit('https://wcaquino.me/cypress/componentes.html');
  // })

  // beforeEach(() => {
  //   cy.reload();
  // })

  it('Deve preencher campo de texto', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.get('#frame1').then(iframe => {
      const body = iframe.contents().find('body')
      cy.wrap(body).find('#tfield')
        .type('funciona?')
        .should('have.value', 'funciona?')
    })
  })

  it('Deve testar iframe diretamente', () => {
    cy.visit('https://wcaquino.me/cypress/frame.html');
    cy.get('#otherButton').click()
    cy.on('window:alert', msg => {
      expect(msg).to.be.equal('Click OK!')
    })
  })
})
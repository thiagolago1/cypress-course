/// <reference types="cypress" />

describe('Esperas...', () => {
  before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
  })

  beforeEach(() => {
    cy.reload();
  })

  it('Deve aguardar elemento estar disponível', () => {
    cy.get('#novoCampo').should('not.exist')
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo').should('exist')
    cy.get('#novoCampo').type('funciona')
  })

  it('Deve fazer retrys', () => {
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo')
      .should('exist')
      .type('funciona')
  })

  it('Uso do find', () => {
    cy.get('#buttonListDOM').click()
    cy.get('#lista li')
      .find('span')
      .should('contain', 'Item 1')
    // cy.get('#lista li')
    //   .find('span')
    //   .should('contain', 'Item 2')

    cy.get('#lista li span')
      .should('contain', 'Item 2')
  })

  it('Uso do Timeout', () => {
    // cy.get('#buttonDelay').click()
    // cy.get('#novoCampo').should('exist')
    // cy.get('#buttonListDOM').click()
    // cy.wait(5000)
    // cy.get('#lista li span', {timeout: 30000})
      // .should('contain', 'Item 2')

      cy.get('#buttonListDOM').click()
      cy.get('#lista li span')
        .should('have.length', 1)
      cy.get('#lista li span')
        .should('have.length', 2)
  })

  it('Click retry', () => {
    cy.get('#buttonCount')
      .click()
      .click()
      .should('have.value', '111')
  })

  // O Then aguarda a finalização para ser executado
  // No Then é possível por um return quando
  // Para fazer novas busca, sempre detro do Then. O Should vai entrar em loop se tentar um get dentro da função
  // O Should fica fazendo a verificação, fica sendo executado ao longo da espera
  // O Should ignora qualquer return, vai sempre retornar o objeto/elemento que recebeu
  it.only('Should vs Then', () => {
    // cy.get('#buttonListDOM').click()
    // cy.get('#lista li span').then($el => {
    //   console.log('1 ', $el)
    //   expect($el).to.have.length(1)
    // })
    // cy.get('#lista li span').should($el => {
    //   console.log('2 ', $el)
    //   expect($el).to.have.length(1)
    // })
    // cy.get('#buttonListDOM').then($el => {
    //   expect($el).to.have.length(1)
    //   return 2
    // }).and('have.id', 'buttonListDOM')
    cy.get('#buttonListDOM').then($el => {
      expect($el).to.have.length(1)
      // cy.get('#buttonList')
    })
  })
})
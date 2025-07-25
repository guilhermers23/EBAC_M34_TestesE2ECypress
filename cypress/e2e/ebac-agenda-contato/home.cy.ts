/// <reference types="cypress" />

describe("Testes para a Home EBAC Agenda de Contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app")
    });

    it("Verificar se renderizou Título e parte de adicionar contato", () => {
        cy.get('.sc-jTrPJq > h1').should('have.text', 'Agenda de  contatos');
        cy.get('.sc-iAEyYk > :nth-child(1)').should('be.visible');
    });

    it('Verificar inclusão de contato', () => {
        cy.get('[type="text"]').type('Guilherme');
        cy.get('[type="email"]').type('guilherme@outlook.com');
        cy.get('[type="tel"]').type('27 99999-9999');
        cy.screenshot('1-tela-inicial');
        cy.get('.adicionar').click();
        cy.screenshot('2-contato-adicionado')

        cy.contains('Guilherme').should('be.visible');
        cy.contains('guilherme@outlook.com').should('be.visible');
        cy.contains('27 99999-9999').should('be.visible');
    });

    it('Verificar edição de um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        cy.screenshot('3-contato-antes-da-edicao');
        cy.get('[type="text"]').clear().type('Guilherme Rosa');
        cy.get('[type="email"]').clear().type('guilherme@gmail.com');
        cy.get('[type="tel"]').clear().type('27 99999-9977');
        cy.get('.alterar').click();
        cy.screenshot('4-contato-alterado');

        cy.contains('Guilherme Rosa').should('be.visible');
        cy.contains('guilherme@gmail.com').should('be.visible');
        cy.contains('27 99999-9977').should('be.visible');
    });

    it('Verificar exclusão de um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click();
    });
});

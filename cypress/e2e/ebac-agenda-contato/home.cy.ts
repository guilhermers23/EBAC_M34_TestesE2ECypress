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
        cy.get('.adicionar').click();
    });

    it('Verificar edição de um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        cy.get('[type="text"]').clear().type('Guilherme Rosa');
        cy.get('[type="email"]').clear().type('guilherme@gmail.com');
        cy.get('[type="tel"]').clear().type('27 99999-9977');
        cy.get('.alterar').click();
    });
});

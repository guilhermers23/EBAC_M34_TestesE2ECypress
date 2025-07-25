/// <reference types="cypress" />

describe("Teste com a página para candidatura de vagas", () => {
    beforeEach(() => {
        cy.visit("https://ebac-jobs-e2e.vercel.app/");
    });

    it("Deve lever ao formulario de candidatura", () => {
        cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').click();
        cy.get('.Aplicacao_aplicacao__uGZIR > h2').contains('Candidate-se para a vaga Desenvolvedor front-end').should('be.visible');
        cy.get('input').should('have.length', 7);

    });

    it("Verificar se campo seráo preenchidos e enviado", () => {
        cy.get(':nth-child(1) > .Vaga_vagaLink__DeFkk').click();
        cy.get('.Aplicacao_nomeEmail__bYdHy > [type="text"]').type("Guilherme Rosa da Silva");
        cy.get('[type="email"]').type("guilherme@outlook.com");
        cy.get('[type="tel"]').type("27 99999-9999");
        cy.get('.Aplicacao_contato__VFz7a > [type="text"]').type('Rua Programaçao, N34, B.Cypress, Espirito Santo - ES');
        cy.get('#windows').check();
        cy.get('select').select('medio-completo');
        cy.get('.Aplicacao_button__tw2AE').click();

        cy.on('window:alert', (conteudo) => expect(conteudo).contain('Obrigado pela candidatura!'));
    })
})
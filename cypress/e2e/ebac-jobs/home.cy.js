/// <reference types="cypress" />

describe("Testes para a Home EBAC Jobs", () => {
    beforeEach(() => {
        cy.visit("https://ebac-jobs-e2e.vercel.app/")
    });

    it("Verificar se vai renderizar 4 vagas", () => {
        cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 4)
    })

    it("Verificar se vai filtrar desenvolvedor front-end", () => {
        cy.get(".FormVagas_campo__E1ppF").type("desenvolvedor front-end")
        cy.get("button[type='submit']").click()
        cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 2)
    })
});

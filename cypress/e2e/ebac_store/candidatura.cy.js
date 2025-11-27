/// <reference types="cypress" />

describe("Test 2", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e-bay.vercel.app/");
  });

  it("Go to forms", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    cy.get("input").should("have.length", 7);
  });

  it("Must complet forms", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    cy.get(".Aplicacao_nomeEmail__bYdHy > input[name='nome-completo']").type(
      "Guilherme Monteiro Toledo"
    );
    cy.get(".Aplicacao_nomeEmail__bYdHy > input[name='email']").type(
      "guitoledo13@hotmail.com"
    );
    cy.get(".Aplicacao_contato__VFz7a > input[name='telefone']").type(
      15996841824
    );
    cy.get(".Aplicacao_contato__VFz7a > input[name='endereco']").type(
      "Rua padre gravina, 505"
    );
    cy.get("#linux").check();
    cy.get("select[name='escolaridade'").select("Outros");
    cy.get(".Aplicacao_button__tw2AE").click();

    cy.on("window:alert", (conteudo) => {
      expect(conteudo).contain("Obrigado pela candidatura!");
    });
  });
});

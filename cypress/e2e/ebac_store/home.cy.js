/// <reference types="cypress" />

describe("Test 1", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e-bay.vercel.app/");
  });

  it("Must renderize 4", () => {
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 4);
  });

  it("must filter by fullstack", () => {
    cy.get(".FormVagas_campo__E1ppF").type("fullstack{enter}");
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 1);
  });
});

/// <reference types="cypress" />

describe("Home Page", () => {
  it("Contains Counter Component", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="counter"]');
  });

  it("Contains a button to increment the counter", () => {
    cy.visit("http://localhost:3000");
    const button = cy.get("[data-cy='counter'] button");
    button.contains("Increment");
    button.click();
    cy.get("[data-cy='counter'] span").contains("1");
    button.click();
    cy.get("[data-cy='counter'] span").contains("2");
  });
});

describe("Tests the application", () => {
  beforeEach(() => {
    cy.server();
    cy.viewport(375, 600);
    cy.visit("http://localhost:3000/mtg-life-counter");
  });
  it("Should add 5 life points to each player", () => {
    for (let index = 0; index < 5; index++) {
      cy.dataCy("increase").click({ multiple: true });
    }
    cy.dataCy("value").contains("25", { matchCase: false });
  });

  it("Should remove 5 life points to each player", () => {
    for (let index = 0; index < 5; index++) {
      cy.dataCy("decrease").click({ multiple: true });
    }
    cy.dataCy("value").contains("15", { matchCase: false });
  });

  it("Should write the players' names", () => {
    cy.get(".first-life-counter input")
      .type("Yugi")
      .should("to.have.value", "Yugi");
    cy.get(".second-life-counter input")
      .type("Kaiba")
      .should("to.have.value", "Kaiba");
  });

  it("Should turn the second player's life points to 0 and then restart the counter", () => {
    for (let index = 0; index < 20; index++) {
      cy.get('.second-life-counter [data-cy="decrease"]').click();
    }
    cy.get('.second-life-counter [data-cy="value"]').should(
      "to.have.text",
      "0"
    );
    cy.dataCy("restart-counters").click();
    cy.get('.second-life-counter [data-cy="value"]').should(
      "to.have.text",
      "20"
    );
  });
});

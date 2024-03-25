import Counter from "./counter";

describe("<Counter />", () => {
  it("renders", () => {
    cy.mount(<Counter count={1} />);
  });

  it("increments by 1", () => {
    cy.mount(<Counter count={1} countBy={1} />);
    cy.get("button").click();
    cy.get("span").should("have.text", "2");
  });

  it("increments by 2", () => {
    cy.mount(<Counter count={1} countBy={2} />);
    cy.get("button").click();
    cy.get("span").should("have.text", "3");
  });

  // default countBy is 50 increments by 10
  it("default is 50 increments by 10", () => {
    cy.mount(<Counter count={50} countBy={10} />);
    cy.get("button").click();
    cy.get("span").should("have.text", "60");
  });
});

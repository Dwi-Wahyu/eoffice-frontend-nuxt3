describe("fungsi login", () => {
  it("redirect ke dashboard setelah login", () => {
    cy.fixture("users").then((user) => {
      cy.visit("/masuk");
      cy.get("#username").type(user.username);
      cy.get("#password").type(user.password);
      cy.get('button[type="submit"]').click();

      cy.url().should("include", "/dashboard");
    });
  });
});

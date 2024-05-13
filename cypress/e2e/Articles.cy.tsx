describe("<ArticlesPage />", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/articles");
  });
  it("Loads the Articles page", () => {
    cy.get('[data-testid="page-title"]').should("have.text", "Articles");
  });

  it("Loads the test articles", () => {
    cy.get('[data-testid="article-card"]').should("have.length", 4);
  });

  it("checks the href and visits the URL of the second article card", () => {
    cy.get('[data-testid="article-card"]')
      .eq(1)
      .find("a")
      .should("have.attr", "href")
      .then((href: JQuery<HTMLAnchorElement>) => {
        expect(href).to.equal("/articles/002");
        cy.visit(href as unknown as string);
      });
  });
});

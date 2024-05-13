import React from "react";
import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { ArticleCard } from "./ArticleCard.component";

describe("ArticleCard", () => {
  const defaultProps = {
    id: "1",
    title: "Test Title",
    publishedOn: 1616161616161,
    author: "Test Author",
  };

  it("renders title, date, and author", () => {
    const { getByText } = render(<ArticleCard {...defaultProps} />);
    expect(getByText(defaultProps.title)).toBeInTheDocument();
    expect(getByText(defaultProps.author)).toBeInTheDocument();
  });

  it("links to the correct article page", () => {
    const { getByText } = render(<ArticleCard {...defaultProps} />);
    expect(getByText(defaultProps.title).closest("a")).toHaveAttribute("href", `/articles/${defaultProps.id}`);
  });
});

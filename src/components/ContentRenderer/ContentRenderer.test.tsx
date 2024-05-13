import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import {
  HeaderBlock,
  ParagraphBlock,
  ImageBlock,
  OrderedListBlock,
  UnorderedListBlock,
  DividerBlock,
  BlockQuoteBlock,
} from "./ContentRenderer.elements";

describe("Components :: ContentRenderer", () => {
  // NOTE: Suppress Govuk-react defaultProps deprecation warning until they merge in new version (https://github.com/govuk-react/govuk-react/pull/1650)
  console.error = () => undefined;

  describe("HeaderBlock", () => {
    it("Should render a Header with the value provided", () => {
      const { getByText } = render(<HeaderBlock __typename="Header" value={"Hello world"} />);
      expect(getByText("Hello world")).toBeInTheDocument();
    });
  });
  describe("OrderedListBlock", () => {
    it("Should render an ordered list with some fruits as the items", () => {
      const { getByText, queryByText } = render(
        <OrderedListBlock __typename="OrderedList" values={["Apples", "Oranges", "Pears"]} />
      );
      expect(getByText("Apples")).toBeInTheDocument();
      expect(getByText("Oranges")).toBeInTheDocument();
      expect(getByText("Pears")).toBeInTheDocument();
      expect(queryByText("Bananas")).not.toBeInTheDocument();
    });
  });

  describe("UnorderedListBlock", () => {
    it("Should render an unordered list with some vegetables as the items", () => {
      const { getByText, queryByText } = render(
        <UnorderedListBlock __typename="UnorderedList" values={["Carrots", "Peas", "Sweetcorn"]} />
      );
      expect(getByText("Carrots")).toBeInTheDocument();
      expect(getByText("Peas")).toBeInTheDocument();
      expect(getByText("Sweetcorn")).toBeInTheDocument();
      expect(queryByText("Tomato")).not.toBeInTheDocument();
    });
  });
  describe("DividerBlock", () => {
    it("Should render a Divider", () => {
      const { getByTestId } = render(<DividerBlock __typename="Divider" value={""} />);
      expect(getByTestId("divider")).toBeInTheDocument();
    });
  });
  describe("ParagraphBlock", () => {
    it("Should render a paragraph of text", () => {
      const { getByText } = render(<ParagraphBlock __typename="Paragraph" values={["This is line 1", "This is another line"]} />);
      expect(getByText("This is line 1")).toBeInTheDocument();
      expect(getByText("This is another line")).toBeInTheDocument();
    });
  });
  describe("BlockQuoteBlock", () => {
    it("Should render a BlockQuote with the value text rendered", () => {
      const { getByText } = render(<BlockQuoteBlock __typename="BlockQuote" value={"This is a special line of text"} />);
      expect(getByText("This is a special line of text")).toBeInTheDocument();
    });
  });
  describe("ImageBlock", () => {
    it("Should render a ImageBlock", () => {
      const { getByRole } = render(<ImageBlock __typename="Image" src="abc123" />);
      expect(getByRole("img")).toBeInTheDocument();
    });
    it("Should render a ImageBlock and have alt text", () => {
      const { getByRole } = render(<ImageBlock __typename="Image" src="abc123" />);
      expect(getByRole("img")).toHaveProperty("alt", "image description");
    });
  });
});

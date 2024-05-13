"use client";
import { FC, JSXElementConstructor, ReactElement } from "react";
import { ContentRendererProps } from "./ContentRenderer.types";
import {
  HeaderBlock,
  ParagraphBlock,
  ImageBlock,
  OrderedListBlock,
  UnorderedListBlock,
  DividerBlock,
  BlockQuoteBlock,
} from "./ContentRenderer.elements";

const Elements: Record<string, JSXElementConstructor<any>> = {
  Header: HeaderBlock,
  Paragraph: ParagraphBlock,
  Image: ImageBlock,
  OrderedList: OrderedListBlock,
  UnorderedList: UnorderedListBlock,
  Divider: DividerBlock,
  BlockQuote: BlockQuoteBlock,
};

export const ContentRenderer: FC<ContentRendererProps> = ({ data }) => {
  return (
    <>
      {data.map((element, i) => {
        const El = Elements[element.__typename];
        if (El) {
          return <El {...element} key={i} />;
        }
      })}
    </>
  );
};

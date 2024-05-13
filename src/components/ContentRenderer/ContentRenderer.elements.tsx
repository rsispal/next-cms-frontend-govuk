import { Header, Paragraph, Image, OrderedList, UnorderedList, Divider, BlockQuote } from "@/graphql/generated";
import * as GovUK from "govuk-react";
import { FC } from "react";
import NextImage from "next/image";

export const HeaderBlock: FC<Header> = ({ value }) => <GovUK.H1>{value}</GovUK.H1>;

export const ParagraphBlock: FC<Paragraph> = ({ values }) => (
  <>
    {values.map((v, i) => (
      <GovUK.Paragraph key={i}>{v}</GovUK.Paragraph>
    ))}
  </>
);
export const ImageBlock: FC<Image> = ({ src }) => (
  <NextImage
    src={"https://hd.wallpaperswide.com/thumbs/windows_xp_original-t2.jpg"}
    width={320}
    height={320}
    aria-label="image src"
    alt="image description"
  />
);
export const OrderedListBlock: FC<OrderedList> = ({ values }) => (
  <GovUK.OrderedList>
    {values.map((v, i) => (
      <GovUK.ListItem key={i}>{v}</GovUK.ListItem>
    ))}
  </GovUK.OrderedList>
);
export const UnorderedListBlock: FC<UnorderedList> = ({ values }) => (
  <GovUK.UnorderedList>
    {values.map((v, i) => (
      <GovUK.ListItem key={i}>{v}</GovUK.ListItem>
    ))}
  </GovUK.UnorderedList>
);
export const DividerBlock: FC<Divider> = ({ value }) => <GovUK.SectionBreak level="LARGE" visible data-testid="divider" />;

export const BlockQuoteBlock: FC<BlockQuote> = ({ value }) => <GovUK.InsetText>{value}</GovUK.InsetText>;

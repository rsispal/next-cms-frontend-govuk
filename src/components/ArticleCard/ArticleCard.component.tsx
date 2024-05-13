import { FC } from "react";
import { ArticleCardProps } from "./ArticleCard.types";
import Link from "next/link";
import * as Elements from "./ArticleCard.elements";
import dayjs from "dayjs";

export const ArticleCard: FC<ArticleCardProps> = ({ id, title, publishedOn, author }) => {
  const date = dayjs.unix(publishedOn!).format("DD/MM/YYYY");

  return (
    <Elements.Card data-testid="article-card">
      <Link href={`/articles/${id}`}>
        <Elements.Title>{title}</Elements.Title>
        <Elements.Date>{date}</Elements.Date>
        <Elements.Author>{author}</Elements.Author>
      </Link>
    </Elements.Card>
  );
};

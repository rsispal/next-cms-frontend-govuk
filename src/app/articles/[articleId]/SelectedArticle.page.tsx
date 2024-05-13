import { FC } from "react";
import { H1, Paragraph } from "govuk-react";

import { SelectedArticlePageProps } from "./SelectedArticle.types";

export const SelectedArticlePage: FC<SelectedArticlePageProps> = ({ params }) => {
  return (
    <>
      <H1>Selected Article</H1>
      <Paragraph>{`You selected article: ${params.articleId}`}</Paragraph>
    </>
  );
};

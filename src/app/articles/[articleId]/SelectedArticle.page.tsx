"use client";
import { FC } from "react";
import { H1, LoadingBox, Paragraph } from "govuk-react";

import { SelectedArticlePageProps } from "./SelectedArticle.types";
import { useArticleByIdQuery } from "@/graphql/generated";
import ContentRenderer from "@/components/ContentRenderer";

export const SelectedArticlePage: FC<SelectedArticlePageProps> = ({ params }) => {
  const { data, loading, error } = useArticleByIdQuery({ variables: { getArticleByIdId: params.articleId } });

  if (loading) {
    return (
      <LoadingBox loading>
        <div style={{ width: "100vw", height: "50vh" }}></div>
      </LoadingBox>
    );
  }
  return (
    <>
      <H1>Selected Article: {data?.getArticleById?.title}</H1>
      {data?.getArticleById?.content.map((c, i) => <pre key={i}>{JSON.stringify(c, null, 2)}</pre>)}
      {data?.getArticleById && <ContentRenderer data={data.getArticleById.content} />}
    </>
  );
};

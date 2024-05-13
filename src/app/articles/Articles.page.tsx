import { FC } from "react";
import { H1, LoadingBox } from "govuk-react";
import { useAllArticlesQuery } from "@/graphql/generated";
import ArticleCard from "@/components/ArticleCard";

export const ArticlesPage: FC = () => {
  const { data, loading, error } = useAllArticlesQuery();
  if (loading) {
    return (
      <LoadingBox loading>
        <div style={{ width: "100vw", height: "50vh" }}></div>
      </LoadingBox>
    );
  }
  return (
    <>
      <H1 data-testid="page-title">Articles</H1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {data?.getAllArticles.map((d, i) => (
          <ArticleCard key={i} title={d?.title} publishedOn={d?.publishedOn} id={d?.id as string} author={d?.author as string} />
        ))}
      </div>
    </>
  );
};

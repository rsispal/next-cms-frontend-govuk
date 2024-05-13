import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Article = {
  __typename: "Article";
  author?: Maybe<Scalars["String"]["output"]>;
  content: Array<ArticleContent>;
  id: Scalars["String"]["output"];
  publishedOn: Scalars["Int"]["output"];
  status: ArticleStatus;
  title: Scalars["String"]["output"];
};

export type ArticleContent =
  | BlockQuote
  | Divider
  | Header
  | Image
  | OrderedList
  | Paragraph
  | UnorderedList;

export enum ArticleStatus {
  AWAITING_REVIEW = "AWAITING_REVIEW",
  DEPRECATED = "DEPRECATED",
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  UNKNOWN = "UNKNOWN",
}

export type BlockQuote = {
  __typename: "BlockQuote";
  value?: Maybe<Scalars["String"]["output"]>;
};

export type Divider = {
  __typename: "Divider";
  value?: Maybe<Scalars["String"]["output"]>;
};

export type Header = {
  __typename: "Header";
  value?: Maybe<Scalars["String"]["output"]>;
};

export type Image = {
  __typename: "Image";
  src?: Maybe<Scalars["String"]["output"]>;
};

export type OrderedList = {
  __typename: "OrderedList";
  values: Array<Scalars["String"]["output"]>;
};

export type Paragraph = {
  __typename: "Paragraph";
  values: Array<Scalars["String"]["output"]>;
};

export type Query = {
  __typename: "Query";
  getAllArticles: Array<Maybe<Article>>;
  getArticleById?: Maybe<Article>;
  helloWorld: Scalars["String"]["output"];
};

export type QueryGetArticleByIdArgs = {
  id: Scalars["String"]["input"];
};

export type UnorderedList = {
  __typename: "UnorderedList";
  values: Array<Scalars["String"]["output"]>;
};

export type AllArticlesQueryVariables = Exact<{ [key: string]: never }>;

export type AllArticlesQuery = {
  __typename: "Query";
  getAllArticles: Array<{
    __typename: "Article";
    id: string;
    title: string;
    status: ArticleStatus;
    publishedOn: number;
    author?: string | null;
    content: Array<
      | { __typename: "BlockQuote"; value?: string | null }
      | { __typename: "Divider"; value?: string | null }
      | { __typename: "Header"; value?: string | null }
      | { __typename: "Image"; src?: string | null }
      | { __typename: "OrderedList"; values: Array<string> }
      | { __typename: "Paragraph"; values: Array<string> }
      | { __typename: "UnorderedList"; values: Array<string> }
    >;
  } | null>;
};

export type ArticleByIdQueryVariables = Exact<{
  getArticleByIdId: Scalars["String"]["input"];
}>;

export type ArticleByIdQuery = {
  __typename: "Query";
  getArticleById?: {
    __typename: "Article";
    id: string;
    title: string;
    status: ArticleStatus;
    publishedOn: number;
    author?: string | null;
    content: Array<
      | { __typename: "BlockQuote"; value?: string | null }
      | { __typename: "Divider"; value?: string | null }
      | { __typename: "Header"; value?: string | null }
      | { __typename: "Image"; src?: string | null }
      | { __typename: "OrderedList"; values: Array<string> }
      | { __typename: "Paragraph"; values: Array<string> }
      | { __typename: "UnorderedList"; values: Array<string> }
    >;
  } | null;
};

export type HelloWorldQueryVariables = Exact<{ [key: string]: never }>;

export type HelloWorldQuery = { __typename: "Query"; helloWorld: string };

export const AllArticlesDocument = gql`
  query AllArticles {
    getAllArticles {
      id
      title
      status
      publishedOn
      author
      content {
        ... on Header {
          value
        }
        ... on Paragraph {
          values
        }
        ... on Image {
          src
        }
        ... on OrderedList {
          values
        }
        ... on UnorderedList {
          values
        }
        ... on Divider {
          value
        }
        ... on BlockQuote {
          value
        }
      }
    }
  }
`;

/**
 * __useAllArticlesQuery__
 *
 * To run a query within a React component, call `useAllArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllArticlesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllArticlesQuery,
    AllArticlesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllArticlesQuery, AllArticlesQueryVariables>(
    AllArticlesDocument,
    options,
  );
}
export function useAllArticlesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllArticlesQuery,
    AllArticlesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllArticlesQuery, AllArticlesQueryVariables>(
    AllArticlesDocument,
    options,
  );
}
export function useAllArticlesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AllArticlesQuery,
    AllArticlesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AllArticlesQuery, AllArticlesQueryVariables>(
    AllArticlesDocument,
    options,
  );
}
export type AllArticlesQueryHookResult = ReturnType<typeof useAllArticlesQuery>;
export type AllArticlesLazyQueryHookResult = ReturnType<
  typeof useAllArticlesLazyQuery
>;
export type AllArticlesSuspenseQueryHookResult = ReturnType<
  typeof useAllArticlesSuspenseQuery
>;
export type AllArticlesQueryResult = Apollo.QueryResult<
  AllArticlesQuery,
  AllArticlesQueryVariables
>;
export const ArticleByIdDocument = gql`
  query ArticleById($getArticleByIdId: String!) {
    getArticleById(id: $getArticleByIdId) {
      id
      title
      status
      publishedOn
      author
      content {
        ... on Header {
          value
        }
        ... on Paragraph {
          values
        }
        ... on Image {
          src
        }
        ... on OrderedList {
          values
        }
        ... on UnorderedList {
          values
        }
        ... on Divider {
          value
        }
        ... on BlockQuote {
          value
        }
      }
    }
  }
`;

/**
 * __useArticleByIdQuery__
 *
 * To run a query within a React component, call `useArticleByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleByIdQuery({
 *   variables: {
 *      getArticleByIdId: // value for 'getArticleByIdId'
 *   },
 * });
 */
export function useArticleByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    ArticleByIdQuery,
    ArticleByIdQueryVariables
  > &
    (
      | { variables: ArticleByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ArticleByIdQuery, ArticleByIdQueryVariables>(
    ArticleByIdDocument,
    options,
  );
}
export function useArticleByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ArticleByIdQuery,
    ArticleByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ArticleByIdQuery, ArticleByIdQueryVariables>(
    ArticleByIdDocument,
    options,
  );
}
export function useArticleByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ArticleByIdQuery,
    ArticleByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ArticleByIdQuery, ArticleByIdQueryVariables>(
    ArticleByIdDocument,
    options,
  );
}
export type ArticleByIdQueryHookResult = ReturnType<typeof useArticleByIdQuery>;
export type ArticleByIdLazyQueryHookResult = ReturnType<
  typeof useArticleByIdLazyQuery
>;
export type ArticleByIdSuspenseQueryHookResult = ReturnType<
  typeof useArticleByIdSuspenseQuery
>;
export type ArticleByIdQueryResult = Apollo.QueryResult<
  ArticleByIdQuery,
  ArticleByIdQueryVariables
>;
export const HelloWorldDocument = gql`
  query HelloWorld {
    helloWorld
  }
`;

/**
 * __useHelloWorldQuery__
 *
 * To run a query within a React component, call `useHelloWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloWorldQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloWorldQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HelloWorldQuery,
    HelloWorldQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HelloWorldQuery, HelloWorldQueryVariables>(
    HelloWorldDocument,
    options,
  );
}
export function useHelloWorldLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HelloWorldQuery,
    HelloWorldQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HelloWorldQuery, HelloWorldQueryVariables>(
    HelloWorldDocument,
    options,
  );
}
export function useHelloWorldSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    HelloWorldQuery,
    HelloWorldQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<HelloWorldQuery, HelloWorldQueryVariables>(
    HelloWorldDocument,
    options,
  );
}
export type HelloWorldQueryHookResult = ReturnType<typeof useHelloWorldQuery>;
export type HelloWorldLazyQueryHookResult = ReturnType<
  typeof useHelloWorldLazyQuery
>;
export type HelloWorldSuspenseQueryHookResult = ReturnType<
  typeof useHelloWorldSuspenseQuery
>;
export type HelloWorldQueryResult = Apollo.QueryResult<
  HelloWorldQuery,
  HelloWorldQueryVariables
>;

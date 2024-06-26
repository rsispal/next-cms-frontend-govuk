const typeDefs = `
enum ArticleStatus {
  UNKNOWN
  DRAFT
  AWAITING_REVIEW
  PUBLISHED
  DEPRECATED
}

type Article {
  id: String!
  title: String!
  content: [ArticleContent!]!
  status: ArticleStatus!
  publishedOn: Int!
  author: String
}

union ArticleContent = Header | Paragraph | Image | OrderedList | UnorderedList | Divider | BlockQuote

type Header {
  value: String
}

type Paragraph {
  values: [String!]!
}

type Image {
  src: String
}

type OrderedList {
  values: [String!]!
}

type UnorderedList {
  values: [String!]!
}

type Divider {
  value: String
}

type BlockQuote {
  value: String
}

type Query {
  helloWorld: String!
  getAllArticles: [Article]!
  getArticleById(id: String!): Article
}

`;

export default typeDefs;

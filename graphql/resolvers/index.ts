import { ApolloServerOptionsWithTypeDefs, BaseContext } from "@apollo/server";
import { Articles } from "./fakedb";
import { Article } from "@/graphql/generated";

const resolvers: ApolloServerOptionsWithTypeDefs<BaseContext>["resolvers"] = {
  Query: {
    helloWorld: () => {
      return "Hello world!";
    },
    getAllArticles: () => {
      return Articles;
    },
    getArticleById: async (_: never, { id }: { id: string }): Promise<Article | null> => {
      const index = Articles.findIndex((a) => a.id === id);
      if (index >= 0) {
        return Articles.at(index) as Article;
      }
      return null;
    },
  },
};

export default resolvers;

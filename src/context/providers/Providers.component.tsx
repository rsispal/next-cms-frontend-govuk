import { FC, ReactElement } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache(),
});
export const Providers: FC<{ children: ReactElement }> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

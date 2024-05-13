import { readFileSync } from 'fs';
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
// import typeDefs from "../../../graphql/schema";
import resolvers from "../../../graphql/resolvers";

const typeDefs = readFileSync('graphql/schema/schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection:true
})

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({
    req,
    res,
    dataSources: {},
  }),
});
export async function GET(request: NextRequest) {
  return handler(request);
}
export async function POST(request: NextRequest) {
  return handler(request);
}
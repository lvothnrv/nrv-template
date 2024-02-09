import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { resolvers, typeDefs } from './schema';
import context from './context';

const launchGraphQLServer = async (app: any) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    status400ForVariableCoercionErrors: true,
    introspection: true,
  });

  await server.start();

  app.use(cors(), bodyParser.json(), expressMiddleware(server, { context }));
};

export default launchGraphQLServer;

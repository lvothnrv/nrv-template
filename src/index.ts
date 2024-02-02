import express from 'express';
import dotenv from 'dotenv';

import { connectToMongoDB } from './config/database';
import launchGraphQLServer from './graphql/server';

dotenv.config();

const port: string | number = process.env.PORT || 4000;

(async () => {
  const app = express();

  await connectToMongoDB();

  await launchGraphQLServer(app);

  app.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
})();

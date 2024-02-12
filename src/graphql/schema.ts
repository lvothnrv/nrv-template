import fs from 'fs';
import path from 'path';

import UserQuery from './query/UserQuery';
import UserMutation from './mutation/UserMutation';
import AuthMutation from './mutation/AuthMutation';

const typeDefsArray = [
  `
type Query
type Mutation
`,
];

const graphqlFiles = fs.readdirSync(path.resolve(__dirname, './types'));
graphqlFiles.forEach((file: any) => {
  if (file.endsWith('.graphql')) {
    const filePath = path.resolve(__dirname, `./types/${file}`);
    const typeDef = fs.readFileSync(filePath, 'utf-8');
    typeDefsArray.push(typeDef);
  }
});
const typeDefs = typeDefsArray.join('\n');

const query = [UserQuery];
const mutation = [UserMutation, AuthMutation];

const resolvers = {
  Query: Object.assign({}, ...query),
  Mutation: Object.assign({}, ...mutation),
};

export { resolvers, typeDefs };

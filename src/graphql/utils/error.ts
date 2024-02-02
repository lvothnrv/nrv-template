import { GraphQLError } from 'graphql';

const errorResponse = (
  message = 'An error occured.',
  code = 'BAD_REQUEST',
  status = 400,
) => {
  throw new GraphQLError(message, {
    extensions: {
      code,
      http: {
        status,
      },
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { errorResponse };

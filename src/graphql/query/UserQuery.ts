import authMiddleware from '../middleware/AuthMiddleware';

const UserQuery = {
  me: authMiddleware((_: null, __: null, context: any) => context.user),
};

export default UserQuery;

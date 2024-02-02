import { errorResponse } from '../utils/error';

const authMiddleware =
  (next: any) => (root: any, args: any, ctx: any, info: any) => {
    if (!ctx.user) {
      return errorResponse('You must be logged in.', 'UNAUTHORIZED', 401);
    }
    return next(root, args, ctx, info);
  };

export default authMiddleware;

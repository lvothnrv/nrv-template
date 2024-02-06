import { verifyToken } from '../../utils/jwt';

const context = async ({ req }: any) => {
  const ctxAuth = await verifyToken(req);
  return { ...ctxAuth };
};

export default context;

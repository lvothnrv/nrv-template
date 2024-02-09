import { verifyToken } from '../../services/jwt';

const context = async ({ req }: any) => {
  const ctxAuth = await verifyToken(req);
  return { ...ctxAuth };
};

export default context;

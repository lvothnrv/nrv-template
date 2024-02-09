import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { IPersonalAccessToken, IUser } from '../interfaces';

import UserModel from '../models/UserModel';
import PersonalAccessToken from '../models/PersonalAccessToken';

dotenv.config();

const { SECRET_KEY }: any = process.env;

const verifyToken = async (req: any) => {
  const token: string | null = req?.headers?.authorization?.replace(
    'Bearer ',
    '',
  );
  if (!token) {
    return { user: null, token: null };
  }

  const decoded: any = jwt.verify(token, SECRET_KEY, () => {});

  const personalAccessToken: IPersonalAccessToken | null =
    await PersonalAccessToken.findById(decoded?.personalAccessTokenId);

  if (!personalAccessToken) {
    return { user: null, token: null };
  }
  if (!personalAccessToken.active) {
    return { user: null, token: null };
  }

  const user: IUser | null = await UserModel.findById(decoded.userId);
  if (!user) {
    return { user: null, token: null };
  }

  return { user, token };
};

const createToken = async (user: IUser): Promise<string> => {
  const personalAccessToken: IPersonalAccessToken =
    await PersonalAccessToken.create({});

  const token = jwt.sign(
    {
      userId: user._id,
      personalAccessTokenId: personalAccessToken._id,
    },
    SECRET_KEY,
    { expiresIn: '365 days' },
  );

  personalAccessToken.token = token;
  personalAccessToken.active = true;
  personalAccessToken.save();

  return token;
};

export { verifyToken, createToken };

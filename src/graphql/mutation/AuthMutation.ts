import UserModel from '../../models/UserModel';
import { IUser } from '../../interfaces';
import { createToken } from '../../services/jwt';
import { errorResponse } from '../utils/error';

const AuthMutation = {
  login: async (_: null, args: any): Promise<IUser> => {
    const { email, password } = args.user;

    const user: IUser | null = await UserModel.findOne({
      email,
    });

    if (!user) {
      return errorResponse(
        "Cette utilisateur n'existe pas.",
        'BAD_REQUEST',
        400,
      );
    }

    if (!user.isValidPassword(password)) {
      return errorResponse(
        "Le mot de passe n'est pas bon.",
        'BAD_REQUEST',
        400,
      );
    }

    const token = await createToken(user);
    user.token = token;

    return user;
  },

  register: async (_: null, args: any): Promise<IUser> => {
    const { firstName, lastName, email, password } = args.user;

    if (!firstName) {
      return errorResponse('The first name is missing', 'BAD_REQUEST', 400);
    }
    if (!lastName) {
      return errorResponse('The last name is missing', 'BAD_REQUEST', 400);
    }
    if (!email) {
      return errorResponse('Email address is missing.', 'BAD_REQUEST', 400);
    }
    if (!password) {
      return errorResponse('Password is missing.', 'BAD_REQUEST', 400);
    }

    const user: IUser | null = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    const token = await createToken(user);
    user.token = token;

    return user;
  },
};

export default AuthMutation;

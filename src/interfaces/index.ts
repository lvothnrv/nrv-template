import { Document } from 'mongoose';

export interface IUser extends Document {
  _id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token?: string;
  isValidPassword(password: string): boolean;
}

export interface IPersonalAccessToken extends Document {
  _id?: string;
  token?: string;
  active?: boolean;
  lastUsedAt?: Date;
}

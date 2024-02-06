import { Schema, model } from 'mongoose';
import { IPersonalAccessToken } from '../interfaces';

const personalAccessTokenSchema = new Schema<IPersonalAccessToken>(
  {
    token: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    lastUsedAt: {
      type: Date,
    },
  },
  {
    collection: 'personalAccessTokens',
    timestamps: true,
  },
);

export default model('PersonalAccessToken', personalAccessTokenSchema);

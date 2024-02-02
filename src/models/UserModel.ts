import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import { IUser } from '../interfaces';

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: 'users',
    timestamps: true,
  },
);

userSchema.pre('save', function encryptPassword(next: any) {
  const hashedPassword = bcrypt.hashSync(this.password, 10);
  this.password = hashedPassword;
  next();
});

userSchema.method(
  'isValidPassword',
  function comparePassword(password: string) {
    const isValid: Boolean = bcrypt.compareSync(password, this.password);
    return isValid;
  },
);

export default mongoose.model('User', userSchema);

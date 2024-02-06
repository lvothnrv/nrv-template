import dotenv from 'dotenv';
import database from '../models';

dotenv.config();

const connectToMongoDB = async () => {
  // const url = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
  const url = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;

  await database.mongoose
    .connect(url)
    .then(() => {
      console.log('Successfully connect to MongoDB.');
    })
    .catch((err: object) => {
      console.error('Connection error', err);
    });
};

// eslint-disable-next-line import/prefer-default-export
export { connectToMongoDB };

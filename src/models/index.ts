import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const database: any = {};

database.mongoose = mongoose;

database.user = require('./UserModel');
database.personelAccessToken = require('./PersonalAccessToken');

export default database;

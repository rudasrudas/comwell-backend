import { Mongoose } from 'mongoose';
import { UserSchema } from './user.schema';

export const userProviders = [
  {
    provide: 'User',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
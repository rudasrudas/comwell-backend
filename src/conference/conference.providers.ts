import { Mongoose } from 'mongoose';
import { ConferenceSchema } from './conference.schema';

export const conferenceProviders = [
  {
    provide: 'Conference',
    useFactory: (mongoose: Mongoose) => mongoose.model('Conference', ConferenceSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
import { Mongoose } from 'mongoose';
import { PartySchema } from './party.schema';

export const partyProviders = [
  {
    provide: 'Party',
    useFactory: (mongoose: Mongoose) => mongoose.model('Party', PartySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

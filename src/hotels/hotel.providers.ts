import { Mongoose } from 'mongoose';
import { HotelSchema } from './hotel.schema';

export const hotelProviders = [
  {
    provide: 'Hotel',
    useFactory: (mongoose: Mongoose) => mongoose.model('Hotel', HotelSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
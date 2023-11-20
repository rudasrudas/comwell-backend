import { Mongoose } from 'mongoose';
import { HotelModel, HotelSchema } from './hotel.schema';

export const hotelsProviders = [
  {
    provide: 'HOTEL_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model(HotelModel, HotelSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
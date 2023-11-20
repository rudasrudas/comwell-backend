import { Mongoose } from 'mongoose';
import { BookingSchema } from './booking.schema';

export const bookingProviders = [
  {
    provide: 'Booking',
    useFactory: (mongoose: Mongoose) => mongoose.model('Booking', BookingSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
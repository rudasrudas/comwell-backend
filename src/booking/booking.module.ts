import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { bookingProviders } from './booking.providers';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingSchema } from './booking.schema';

@Module({
	imports: [
		DatabaseModule,
    MongooseModule.forFeature([{ name: 'Booking', schema: BookingSchema }]),
  ],
	controllers: [BookingController],
	providers: [BookingService, ...bookingProviders]
})
export class BookingModule {}

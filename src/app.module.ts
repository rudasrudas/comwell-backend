import { Module } from '@nestjs/common';
import { HotelModule } from './hotels/hotel.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { BookingController } from './booking/booking.controller';
import { BookingService } from './booking/booking.service';
import { BookingModule } from './booking/booking.module';
import { PartyModule } from './party/party.module';
import { ConferenceModule } from './conference/conference.module';

@Module({
  imports: [
    HotelModule, 
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    BookingModule,
    PartyModule,
    ConferenceModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}

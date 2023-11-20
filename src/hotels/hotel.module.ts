import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { DatabaseModule } from 'src/database/database.module';
import { hotelProviders } from './hotel.providers';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelSchema } from './hotel.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }]),
  ],
  controllers: [HotelController],
  providers: [HotelService, ...hotelProviders],
})
export class HotelModule {}

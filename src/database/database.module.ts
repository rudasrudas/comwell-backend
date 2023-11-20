import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelSchema } from 'src/hotels/hotel.schema';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }]),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
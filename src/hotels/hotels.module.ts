/* eslint-disable prettier/prettier */
// hotels/hotels.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { HotelSchema } from './hotel.schema';
import { DatabaseModule } from 'src/database/database.module';
import { hotelsProviders } from './hotels.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [HotelsController],
  providers: [HotelsService, ...hotelsProviders],
})
export class HotelsModule {}

/* eslint-disable prettier/prettier */
// hotels/hotels.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './hotel.schema';

@Injectable()
export class HotelsService {
  constructor(
    @Inject('HOTEL_MODEL') private readonly hotelModel: Model<Hotel>,
  ) {}

  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().exec();
  }
}

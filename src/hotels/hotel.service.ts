import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Hotel } from './hotel.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel('Hotel') private readonly hotelModel: Model<Hotel>,
  ) {}

  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().exec();
  }
}

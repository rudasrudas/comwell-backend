import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Booking, Room } from './booking.schema';
import { Types } from 'mongoose';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
  ) {}

  async createBooking(
    user: Types.ObjectId | string,
    hotel: Types.ObjectId | string,
    dates: { start: Date; end: Date },
    rooms: Array<Room>,
  ): Promise<Booking> {
    const booking = new this.bookingModel({
      user,
      hotel,
      dates,
      rooms,
      registrationDate: new Date(),
    });

    return booking.save();
  }

  async getBookingsByUser(userId: Types.ObjectId | string): Promise<Booking[]> {
    return this.bookingModel.find({ user: userId }).exec();
  }

  async getAllBookings(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }
}
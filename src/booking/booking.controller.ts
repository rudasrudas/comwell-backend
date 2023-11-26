import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking, Room, PersonalInfo } from './booking.schema';
import { Types } from 'mongoose';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async createBooking(
    @Body('user') user: Types.ObjectId | string,
    @Body('hotel') hotel: Types.ObjectId | string,
    @Body('dates') dates: { start: Date; end: Date },
    @Body('rooms') rooms: Room[],
    @Body('personalInfo') personalInfo: Types.ObjectId | string,
  ): Promise<Booking> {
    return this.bookingService.createBooking(user, hotel, dates, rooms, personalInfo);
  }

  @Get(':userId')
  async getBookingsByUser(@Param('userId') userId: Types.ObjectId | string): Promise<Booking[]> {
    return this.bookingService.getBookingsByUser(userId);
  }

  @Get()
  async getAllBookings(): Promise<Booking[]> {
    return this.bookingService.getAllBookings();
  }
}

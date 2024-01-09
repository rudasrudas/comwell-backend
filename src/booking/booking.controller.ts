import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking, Room } from './booking.schema';
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
    try {
      const result = await this.bookingService.createBooking(user, hotel, dates, rooms, personalInfo);
      return result;
    } catch (error) {
      console.error('Error creating booking:', error.message);
      throw new Error('Failed to create booking. Please check your input.');
    }
  }

  @Get(':userId')
  async getBookingsByUser(@Param('userId') userId: Types.ObjectId | string): Promise<Booking[]> {
    try {
      const result = await this.bookingService.getBookingsByUser(userId);
      return result;
    } catch (error) {
      console.error('Error retrieving bookings by user:', error.message);
      throw new Error('Failed to retrieve bookings for the user.');
    }
  }

  @Get()
  async getAllBookings(): Promise<Booking[]> {
    try {
      const result = await this.bookingService.getAllBookings();
      return result;
    } catch (error) {
      console.error('Error retrieving all bookings:', error.message);
      throw new Error('Failed to retrieve all bookings.');
    }
  }
}

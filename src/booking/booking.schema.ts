import { Schema, Document, Types } from 'mongoose';

export interface Room extends Document {
  adult: number;
  children: number;
  toddler: number;
  room: Types.ObjectId | string;
}

export interface Booking extends Document {
  user: Types.ObjectId | string; // Reference to the user who made the booking
  hotel: Types.ObjectId | string; // Reference to the hotel
  dates: {
    start: Date;
    end: Date;
  };
  rooms: Array<Room>;
  registrationDate: Date;
}

export const BookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming 'User' is your user model
  hotel: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true }, // Assuming 'Hotel' is your hotel model
  dates: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  rooms: [
    {
      adult: { type: Number, required: true },
      children: { type: Number, required: true },
      toddler: { type: Number, required: true },
      room: { type: Schema.Types.ObjectId, ref: 'Room', required: true }, // Assuming 'Room' is your room model
    },
  ],
  registrationDate: { type: Date, default: Date.now },
});

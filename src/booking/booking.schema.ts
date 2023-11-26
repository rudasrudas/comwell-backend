import { Schema, Document, Types } from 'mongoose';

export interface Room extends Document {
  adult: number;
  children: number;
  toddler: number;
  room: Types.ObjectId | string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phoneNumber: string;
  comment: string;
  paymentMethod: string;
}

export interface Booking extends Document {
  user: Types.ObjectId | string;
  hotel: Types.ObjectId | string;
  dates: {
    start: Date;
    end: Date;
  };
  rooms: Array<Room>;
  registrationDate: Date;
	personalInfo: PersonalInfo;
}

export const BookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  hotel: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
  dates: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  rooms: [
    {
      adult: { type: Number, required: true },
      children: { type: Number, required: true },
      toddler: { type: Number, required: true },
      room: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
    },
  ],
	personalInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    comment: { type: String, required: false },
    paymentMethod: { type: String, required: true },
  },
  registrationDate: { type: Date, default: Date.now },
});

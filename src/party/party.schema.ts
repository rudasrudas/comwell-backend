import { Schema, Document, Types } from 'mongoose';

export interface PartyBookersInfo {
  fullName: string;
  email: string;
  phoneNumber: string;
  company: string;
  comment: string;
}

export interface Party extends Document {
  user: Types.ObjectId | string;
  arrangement: string;
  numberOfParticipants: number;
  hotels: Types.ObjectId[] | string[];
  dates: {
    start: Date;
    end: Date;
  };
  interestedInAccommodation: boolean;
  bookersInfo: PartyBookersInfo;
  registrationDate: Date;
}

export const PartySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  arrangement: { type: String, required: true },
  numberOfParticipants: { type: Number, required: true },
  hotels: [{ type: Schema.Types.ObjectId, ref: 'Hotel', required: true }],
  dates: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  interestedInAccommodation: { type: Boolean, required: true },
  bookersInfo: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    company: { type: String, required: false },
    comment: { type: String, required: false },
  },
  registrationDate: { type: Date, default: Date.now },
});

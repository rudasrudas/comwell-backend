import { Schema, Document, Types } from 'mongoose';


export interface BookersInfo {
  company: string;
  department: string;
  nameOfMeeting: string;
  name: string;
  email: string;
  phoneNumber: string;
  comment: string;
}

export interface Conference extends Document {
  user: Types.ObjectId | string;
  hotels: Types.ObjectId[] | string[];
  dates: {
    start: Date;
    end: Date;
  };
  numberOfParticipants: Number;
  registrationDate: Date;
  personalInfo: BookersInfo;
  interestedInAccommodation: Boolean;
}

export const ConferenceSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  hotels: [{ type: Schema.Types.ObjectId, ref: 'Hotel', required: true }],
  dates: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  bookersInfo: {
    company: { type: String, required: true },
    department: { type: String, required: false },
    nameOfMeeting: { type: String, required: false },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    comment: { type: String, required: false },
  },
  registrationDate: { type: Date, default: Date.now },
});

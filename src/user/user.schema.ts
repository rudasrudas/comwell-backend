import { Schema, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  zipcode: string;
  phoneNumber: string;
  password: string;
  sex: string;
  dateOfBirth: Date;
  registrationDate: Date;
}

export const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  zipcode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  sex: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  registrationDate: { type: Date, default: Date.now },
});

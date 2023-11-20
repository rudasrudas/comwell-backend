import { Schema, Document } from 'mongoose';

export interface Hotel extends Document {
  name: string;
  description: string;
}

export const HotelSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});
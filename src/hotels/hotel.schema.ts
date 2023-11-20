/* eslint-disable prettier/prettier */
import { Schema, Document } from 'mongoose';

export interface Hotel extends Document {
  name: string;
  description: string;
  // Add more properties as needed
}

export const HotelSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  // Define more schema properties as needed
});

export const HotelModel = 'Hotel';

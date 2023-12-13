import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Conference } from './conference.schema';
import { Types } from 'mongoose';

// @Injectable
export class ConferenceService {
    constructor(
        @InjectModel('Conference') private readonly conferenceModel: Model<Conference>,
    ){}

    async createConferenceInquiry(
        user: Types.ObjectId | string,
        hotels: Types.ObjectId[] | string[],
        dates: { start: Date; end: Date },
        numberOfParticipants: Number,
        interestedInAccommodation: Boolean,
        bookersInfo: Types.ObjectId | string,
      ): Promise<Conference> {
        const conference = new this.conferenceModel({
          user,
          hotels,
          dates,
          numberOfParticipants,
          interestedInAccommodation,
          bookersInfo,
          registrationDate: new Date(),
        });
    
        return conference.save();
      }
}
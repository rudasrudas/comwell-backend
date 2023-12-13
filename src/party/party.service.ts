import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Party } from './party.schema';
import { Types } from 'mongoose';

@Injectable()
export class PartyService {
  constructor(
    @InjectModel('Party') private readonly partyModel: Model<Party>,
  ) {}

  async createPartyInquiry(
    user: Types.ObjectId | string,
    arrangement: string,
    numberOfParticipants: number,
    hotels: Types.ObjectId[] | string[],
    dates: { start: Date; end: Date },
    interestedInAccommodation: boolean,
    bookersInfo: Types.ObjectId | string,
  ): Promise<Party> {
    const party = new this.partyModel({
      user,
      arrangement,
      numberOfParticipants,
      hotels,
      dates,
      interestedInAccommodation,
      bookersInfo,
      registrationDate: new Date(),
    });

    return party.save();
  }
}
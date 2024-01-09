import { Controller, Post, Body } from '@nestjs/common';
import { PartyService } from './party.service';
import { Party } from './party.schema';
import { Types } from 'mongoose';

@Controller('parties')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Post()
  async createPartyInquiry(
    @Body('user') user: Types.ObjectId | string,
    @Body('arrangement') arrangement: string,
    @Body('numberOfParticipants') numberOfParticipants: number,
    @Body('hotels') hotels: Types.ObjectId[] | string[],
    @Body('dates') dates: { start: Date; end: Date },
    @Body('interestedInAccommodation') interestedInAccommodation: boolean,
    @Body('bookersInfo') bookersInfo: Types.ObjectId | string,
  ): Promise<Party> {
    try {
      const result = await this.partyService.createPartyInquiry(
        user,
        arrangement,
        numberOfParticipants,
        hotels,
        dates,
        interestedInAccommodation,
        bookersInfo,
      );
      return result;
    } catch (error) {
      console.error('Error creating party inquiry:', error.message);
      throw new Error('Failed to create party inquiry. Please check your input.');
    }
  }
}


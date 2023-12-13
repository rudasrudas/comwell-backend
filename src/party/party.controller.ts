import { Controller, Post, Get, Param, Body } from '@nestjs/common';
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
    return this.partyService.createPartyInquiry(
      user,
      arrangement,
      numberOfParticipants,
      hotels,
      dates,
      interestedInAccommodation,
      bookersInfo,
    );
  }

//   @Get(':userId')
//   async getPartiesByUser(@Param('userId') userId: Types.ObjectId | string): Promise<Party[]> {
//     return this.partyService.getPartiesByUser(userId);
//   }

//   @Get()
//   async getAllParties(): Promise<Party[]> {
//     return this.partyService.getAllParties();
//   }
}

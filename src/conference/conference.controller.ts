import { Controller, Post, Body } from '@nestjs/common';
import { ConferenceService } from './conference.service';
import { Conference } from './conference.schema';
import { Types } from 'mongoose';

@Controller('conferences')
export class ConferenceController {
  constructor(private readonly conferenceService: ConferenceService) {}

  @Post()
  async createConference(
    @Body('user') user: Types.ObjectId | string,
    @Body('hotels') hotels: Types.ObjectId[] | string[],
    @Body('dates') dates: { start: Date; end: Date },
    @Body('times') times: { start: Date; end: Date },
    @Body('numberOfParticipants') numberOfParticipants: number,
    @Body('interestedInAccommodation') interestedInAccommodation: boolean,
    @Body('bookersInfo') bookersInfo: Types.ObjectId | string,
  ): Promise<Conference> {
    try {
      console.log(user, hotels, dates.end, dates.start, "    times    " + times.start, times.end, numberOfParticipants, interestedInAccommodation, bookersInfo);
      
      const result = await this.conferenceService.createConferenceInquiry(
        user,
        hotels,
        dates,
        times,
        numberOfParticipants,
        interestedInAccommodation,
        bookersInfo,
      );
      
      return result;
    } catch (error) {
      console.error('Error creating conference:', error.message);
      throw new Error('Failed to create conference. Please check your input.');
    }
  }
}

import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ConferenceService } from './conference.service';
import { Conference, BookersInfo } from './conference.schema';
import { Types } from 'mongoose';

@Controller('conferences')
export class ConferenceController {
  constructor(private readonly conferenceService: ConferenceService) {}

  @Post()
  async createConference(
    @Body('user') user: Types.ObjectId | string,
    @Body('hotels') hotels: Types.ObjectId[] | string[],
    @Body('dates') dates: { start: Date; end: Date },
    @Body('numberOfParticipants') numberOfParticipants: Number,
    @Body('interestedInAccommodation') interestedInAccommodation: Boolean,
    @Body('bookersInfo') bookersInfo: Types.ObjectId | string,
  ): Promise<Conference> {
    return this.conferenceService.createConferenceInquiry(user, hotels, dates, numberOfParticipants, interestedInAccommodation, bookersInfo);
  }
}

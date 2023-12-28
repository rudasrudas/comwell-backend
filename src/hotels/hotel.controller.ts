import { Controller, Get } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.schema';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  async findAll(): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }

}

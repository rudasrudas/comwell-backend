/* eslint-disable prettier/prettier */
// hotels/hotels.controller.ts
import { Controller, Get } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { Hotel } from './hotel.schema';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get()
  async findAll(): Promise<Hotel[]> {
    return this.hotelsService.findAll();
  }
}

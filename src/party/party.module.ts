import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PartyController } from './party.controller';
import { PartyService } from './party.service';
import { partyProviders } from './party.providers';
import { MongooseModule } from '@nestjs/mongoose';
import { PartySchema } from './party.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Party', schema: PartySchema }]),
  ],
  controllers: [PartyController],
  providers: [PartyService, ...partyProviders],
})
export class PartyModule {}

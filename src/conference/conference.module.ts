import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ConferenceController } from './conference.controller';
import { ConferenceService } from './conference.service';
import { conferenceProviders } from './conference.providers';
import { MongooseModule } from '@nestjs/mongoose';
import { ConferenceSchema } from './conference.schema';

@Module({
	imports: [
		DatabaseModule,
    MongooseModule.forFeature([{ name: 'Conference', schema: ConferenceSchema }]),
  ],
	controllers: [ConferenceController],
	providers: [ConferenceService, ...conferenceProviders]
})
export class ConferenceModule {}
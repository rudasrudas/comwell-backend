import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsModule } from './hotels/hotels.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HotelsModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

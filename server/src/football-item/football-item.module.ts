import { Module } from '@nestjs/common';
import { FootballItemService } from './football-item.service';
import { FootballItemController } from './football-item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FootballItem,
  FootballItemSchema,
} from 'src/schemas/football-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FootballItem.name,
        schema: FootballItemSchema,
      },
    ]),
  ],
  controllers: [FootballItemController],
  providers: [FootballItemService],
})
export class FootballItemModule {}

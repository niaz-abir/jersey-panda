import { Module } from '@nestjs/common';
import { FootballItemService } from './football-item.service';
import { FootballItemController } from './football-item.controller';

@Module({
  controllers: [FootballItemController],
  providers: [FootballItemService],
})
export class FootballItemModule {}

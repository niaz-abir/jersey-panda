import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FootballItemService } from './football-item.service';
import { CreateFootballItemDto } from './dto/create-football-item.dto';
import { UpdateFootballItemDto } from './dto/update-football-item.dto';

@Controller('football-item')
export class FootballItemController {
  constructor(private readonly footballItemService: FootballItemService) {}

  @Post()
  create(@Body() createFootballItemDto: CreateFootballItemDto) {
    return this.footballItemService.create(createFootballItemDto);
  }

  @Get()
  findAll() {
    return this.footballItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.footballItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFootballItemDto: UpdateFootballItemDto) {
    return this.footballItemService.update(+id, updateFootballItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.footballItemService.remove(+id);
  }
}

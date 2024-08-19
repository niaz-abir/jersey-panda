import { Injectable } from '@nestjs/common';
import { CreateFootballItemDto } from './dto/create-football-item.dto';
import { UpdateFootballItemDto } from './dto/update-football-item.dto';

@Injectable()
export class FootballItemService {
  create(createFootballItemDto: CreateFootballItemDto) {
    return 'This action adds a new footballItem';
  }

  findAll() {
    return `This action returns all footballItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} footballItem`;
  }

  update(id: number, updateFootballItemDto: UpdateFootballItemDto) {
    return `This action updates a #${id} footballItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} footballItem`;
  }
}

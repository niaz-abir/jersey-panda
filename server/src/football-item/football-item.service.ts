import { HttpException, Injectable } from '@nestjs/common';
import { CreateFootballItemDto } from './dto/create-football-item.dto';
import { UpdateFootballItemDto } from './dto/update-football-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FootballItem } from 'src/schemas/football-item.schema';

@Injectable()
export class FootballItemService {
  constructor(
    @InjectModel(FootballItem.name)
    private footballItemModel: Model<FootballItem>,
  ) {}

  async create(data: CreateFootballItemDto) {
    const createdFootballItem = new this.footballItemModel(data);
    return await createdFootballItem.save();
  }

  async findAll() {
    const footballItems = await this.footballItemModel.find();
    return footballItems;
  }

  async findOne(id: string) {
    const footballItem = await this.footballItemModel.findById(id);

    if (!footballItem) {
      throw new HttpException('Football Item not found!', 404);
    }

    return footballItem;
  }

  async update(id: string, data: UpdateFootballItemDto) {
    const footballItem = await this.footballItemModel.findById(id);

    if (!footballItem) {
      throw new HttpException('Football Item not found!', 404);
    }

    const result = await this.footballItemModel.findOneAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      },
    );

    return result;
  }

  async remove(id: string) {
    const footballItem = await this.footballItemModel.findById(id);

    if (!footballItem) {
      throw new HttpException('Football Item not found!', 404);
    }

    const deletedJersey = await this.footballItemModel.findByIdAndDelete(id);

    return deletedJersey;
  }
}

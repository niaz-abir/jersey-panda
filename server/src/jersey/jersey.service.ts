import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Jersey } from 'src/schemas/jersey.schema';
import { Model } from 'mongoose';
import { CreateJerseyDto } from './dto/create-jersey.dto';
import { UpdateJerseyDto } from './dto/update-jersey.dto';

@Injectable()
export class JerseyService {
  constructor(@InjectModel(Jersey.name) private jerseyModel: Model<Jersey>) {}

  async create(data: CreateJerseyDto) {
    const createdJersey = new this.jerseyModel(data);
    return await createdJersey.save();
  }

  async findAll() {
    const jerseys = await this.jerseyModel.find();
    return jerseys;
  }

  async findOne(id: string) {
    const jersey = await this.jerseyModel.findById(id);

    console.log(jersey, 'jersey single');

    if (!jersey) {
      throw new HttpException('Jersey not found!', 404);
    }

    return jersey;
  }

  async update(id: string, data: UpdateJerseyDto) {
    const jersey = await this.jerseyModel.findById(id);

    if (!jersey) {
      throw new HttpException('Jersey not found!', 404);
    }

    const result = await this.jerseyModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    return result;
  }

  async remove(id: string) {
    const jersey = await this.jerseyModel.findById(id);

    if (!jersey) {
      throw new HttpException('Jersey not found!', 404);
    }

    const deletedJersey = await this.jerseyModel.findByIdAndDelete(id);

    return deletedJersey;
  }
}

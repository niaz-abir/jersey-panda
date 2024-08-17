import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CustomJersey } from 'src/schemas/custom-jersey.schema';
import { Model } from 'mongoose';
import { CreateCustomJerseyDto } from './dto/create-custom-jersey.dto';
import { UpdateCustomJerseyDto } from './dto/update-custom-jersey.dto';

@Injectable()
export class CustomJerseyService {
  constructor(
    @InjectModel(CustomJersey.name)
    private customJerseyModel: Model<CustomJersey>,
  ) {}

  async create(data: CreateCustomJerseyDto) {
    const customJersey = new this.customJerseyModel(data);
    return await customJersey.save();
  }

  async findAll() {
    const customJerseys = await this.customJerseyModel.find();
    return customJerseys;
  }

  async findOne(id: string) {
    const customJersey = await this.customJerseyModel.findById(id);

    if (!customJersey) {
      throw new HttpException('Custom Jersey not found!', 404);
    }

    return customJersey;
  }

  async update(id: string, data: UpdateCustomJerseyDto) {
    const customJersey = await this.customJerseyModel.findById(id);

    if (!customJersey) {
      throw new HttpException('Custom Jersey not found!', 404);
    }

    const result = await this.customJerseyModel.findOneAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      },
    );

    return result;
  }

  async remove(id: string) {
    const customJersey = await this.customJerseyModel.findById(id);

    if (!customJersey) {
      throw new HttpException('Custom Jersey not found!', 404);
    }

    const deletedCustomJersey =
      await this.customJerseyModel.findByIdAndDelete(id);

    return deletedCustomJersey;
  }
}

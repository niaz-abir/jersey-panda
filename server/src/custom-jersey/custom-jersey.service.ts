import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CustomJersey } from '@prisma/client';

@Injectable()
export class CustomJerseyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCustomJerseyDate: CustomJersey) {
    const customJersey = await this.prisma.customJersey.create({
      data: createCustomJerseyDate,
    });

    return customJersey;
  }

  async findAll() {
    const customJerseys = await this.prisma.customJersey.findMany();
    return customJerseys;
  }

  async findOne(id: string) {
    const customJersey = await this.prisma.customJersey.findUnique({
      where: {
        id,
      },
    });

    return customJersey;
  }

  async update(id: string, updateCustomJerseyData: Partial<CustomJersey>) {
    const result = await this.prisma.customJersey.update({
      where: { id },
      data: updateCustomJerseyData,
    });

    return result;
  }

  async remove(id: string) {
    const deletedCustomJersey = await this.prisma.customJersey.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });

    return deletedCustomJersey;
  }
}

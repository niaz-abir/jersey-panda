import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class JerseyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.JerseyCreateInput) {
    const jersey = await this.prisma.jersey.create({
      data,
    });

    return jersey;
  }

  async findAll() {
    const jerseys = await this.prisma.jersey.findMany();
    return jerseys;
  }

  async findOne(id: string) {
    const jersey = await this.prisma.jersey.findUnique({
      where: {
        id,
      },
    });

    if (!jersey) {
      throw new HttpException('Jersey not found!', 404);
    }

    return jersey;
  }

  async update(id: string, data: Prisma.JerseyUpdateInput) {
    const jersey = await this.prisma.jersey.findUnique({
      where: {
        id,
      },
    });

    if (!jersey) {
      throw new HttpException('Jersey not found!', 404);
    }

    const result = await this.prisma.jersey.update({
      where: { id },
      data,
    });

    return result;
  }

  async remove(id: string) {
    const jersey = await this.prisma.jersey.findUnique({
      where: {
        id,
      },
    });

    if (!jersey) {
      throw new HttpException('Jersey not found!', 404);
    }

    const deletedJersey = await this.prisma.jersey.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });

    return deletedJersey;
  }
}

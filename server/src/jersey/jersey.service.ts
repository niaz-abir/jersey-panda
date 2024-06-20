import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Jersey } from '@prisma/client';

@Injectable()
export class JerseyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createJerseyData: Jersey) {
    const jersey = await this.prisma.jersey.create({
      data: createJerseyData,
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

    return jersey;
  }

  async update(id: string, updateJerseyData: Partial<Jersey>) {
    const result = await this.prisma.jersey.update({
      where: { id },
      data: updateJerseyData,
    });

    return result;
  }

  async remove(id: string) {
    const deletedJersey = await this.prisma.jersey.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });

    return deletedJersey;
  }
}

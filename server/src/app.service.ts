import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Jersey } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createAJersey(data: Jersey) {
    const jersey = await this.prisma.jersey.create({
      data,
    });
    return jersey;
  }
}

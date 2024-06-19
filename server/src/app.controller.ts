import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Jersey } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createAJersey(@Body() createAJerseyData: Jersey) {
    return this.appService.createAJersey(createAJerseyData);
  }
}

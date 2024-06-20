import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { JerseyService } from './jersey.service';
import { createJerseySchema } from './dto/create-jersey.dto';
import { Jersey } from '@prisma/client';
import { ZodValidationPipe } from 'src/pipes/zodValidationPipe';
import { updateJerseySchema } from './dto/update-jersey.dto';

@Controller('jerseys')
export class JerseyController {
  constructor(private readonly jerseyService: JerseyService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createJerseySchema))
  create(@Body() createJerseyData: Jersey) {
    return this.jerseyService.create(createJerseyData);
  }

  @Get()
  findAll() {
    return this.jerseyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jerseyService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateJerseySchema))
    updateJerseyData: Partial<Jersey>,
  ) {
    return this.jerseyService.update(id, updateJerseyData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jerseyService.remove(id);
  }
}

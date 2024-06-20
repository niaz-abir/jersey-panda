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
import { CustomJerseyService } from './custom-jersey.service';
import { createCustomJerseySchema } from './dto/create-custom-jersey.dto';
import { updateCustomJerseySchema } from './dto/update-custom-jersey.dto';
import { ZodValidationPipe } from 'src/pipes/zodValidationPipe';
import { CustomJersey } from '@prisma/client';

@Controller('custom-jerseys')
export class CustomJerseyController {
  constructor(private readonly customJerseyService: CustomJerseyService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createCustomJerseySchema))
  create(@Body() createCustomJerseyDate: CustomJersey) {
    return this.customJerseyService.create(createCustomJerseyDate);
  }

  @Get()
  findAll() {
    return this.customJerseyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customJerseyService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateCustomJerseySchema))
    updateCustomJerseyData: Partial<CustomJersey>,
  ) {
    return this.customJerseyService.update(id, updateCustomJerseyData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customJerseyService.remove(id);
  }
}

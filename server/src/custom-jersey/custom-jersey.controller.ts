import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  HttpStatus,
} from '@nestjs/common';
import { CustomJerseyService } from './custom-jersey.service';
import {
  CreateCustomJerseyDto,
  createCustomJerseySchema,
} from './dto/create-custom-jersey.dto';
import {
  UpdateCustomJerseyDto,
  updateCustomJerseySchema,
} from './dto/update-custom-jersey.dto';
import { ZodValidationPipe } from 'src/pipes/zodValidationPipe';
import GenerateResponse from 'src/utils/GenerateResponse';

@Controller('custom-jerseys')
export class CustomJerseyController {
  constructor(private readonly customJerseyService: CustomJerseyService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createCustomJerseySchema))
  async create(@Body() createCustomJerseyDate: CreateCustomJerseyDto) {
    const result = await this.customJerseyService.create(
      createCustomJerseyDate,
    );

    return new GenerateResponse(
      true,
      HttpStatus.CREATED,
      'Custom Jersey is created successfully.',
      result,
    );
  }

  @Get()
  async findAll() {
    const result = await this.customJerseyService.findAll();

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Custom Jerseys are retrieved successfully.',
      result,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.customJerseyService.findOne(id);

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Custom Jersey is retrieved successfully.',
      result,
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateCustomJerseySchema))
    updateCustomJerseyData: UpdateCustomJerseyDto,
  ) {
    const result = await this.customJerseyService.update(
      id,
      updateCustomJerseyData,
    );

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Custom Jersey is upated successfully.',
      result,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.customJerseyService.remove(id);

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Custom Jersey is deleted successfully.',
      result,
    );
  }
}

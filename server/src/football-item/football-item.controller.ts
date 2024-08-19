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
  UseFilters,
} from '@nestjs/common';
import { FootballItemService } from './football-item.service';
import {
  CreateFootballItemDto,
  createFootballItemSchema,
} from './dto/create-football-item.dto';
import {
  UpdateFootballItemDto,
  updateFootballItemSchema,
} from './dto/update-football-item.dto';
import { ZodValidationPipe } from 'src/pipes/zodValidationPipe';
import GenerateResponse from 'src/utils/GenerateResponse';
import { CustomExceptionsFilter } from 'src/exceptions/CustomExceptionFilter';

@UseFilters(CustomExceptionsFilter)
@Controller('football-items')
export class FootballItemController {
  constructor(private readonly footballItemService: FootballItemService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createFootballItemSchema))
  async create(@Body() createFootballItemDto: CreateFootballItemDto) {
    const result = await this.footballItemService.create(createFootballItemDto);

    return new GenerateResponse(
      true,
      HttpStatus.CREATED,
      'Football Item is created successfully.',
      result,
    );
  }

  @Get()
  async findAll() {
    const result = await this.footballItemService.findAll();

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Football Items are retrieved successfully.',
      result,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.footballItemService.findOne(id);

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Football Item is retrieved successfully.',
      result,
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateFootballItemSchema))
    updateFootballItemDto: UpdateFootballItemDto,
  ) {
    const result = await this.footballItemService.update(
      id,
      updateFootballItemDto,
    );

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Football Item is updated successfully.',
      result,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.footballItemService.remove(id);

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Football Item is deleted successfully.',
      result,
    );
  }
}

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
import { JerseyService } from './jersey.service';
import { CreateJerseyDto, createJerseySchema } from './dto/create-jersey.dto';
import { ZodValidationPipe } from 'src/pipes/zodValidationPipe';
import { UpdateJerseyDto, updateJerseySchema } from './dto/update-jersey.dto';
import GenerateResponse from 'src/utils/GenerateResponse';
import { CustomExceptionsFilter } from 'src/exceptions/CustomExceptionFilter';

@UseFilters(CustomExceptionsFilter)
@Controller('jerseys')
export class JerseyController {
  constructor(private readonly jerseyService: JerseyService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createJerseySchema))
  async create(@Body() createJerseyDto: CreateJerseyDto) {
    const result = await this.jerseyService.create(createJerseyDto);

    return new GenerateResponse(
      true,
      HttpStatus.CREATED,
      'Jersey is created successfully.',
      result,
    );
  }

  @Get()
  async findAll() {
    const result = await this.jerseyService.findAll();

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Jerseys are retrieved successfully.',
      result,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.jerseyService.findOne(id);

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Jersey is retrieved successfully.',
      result,
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateJerseySchema))
    updateJerseyDto: UpdateJerseyDto,
  ) {
    const result = await this.jerseyService.update(id, updateJerseyDto);

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Jersey is updated successfully.',
      result,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.jerseyService.remove(id);

    return new GenerateResponse(
      true,
      HttpStatus.OK,
      'Jersey is deleted successfully.',
      result,
    );
  }
}

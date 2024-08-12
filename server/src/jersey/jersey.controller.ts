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
import { JerseyService } from './jersey.service';
import { CreateJerseyDto, createJerseySchema } from './dto/create-jersey.dto';
import { ZodValidationPipe } from 'src/pipes/zodValidationPipe';
import { UpdateJerseyDto, updateJerseySchema } from './dto/update-jersey.dto';
import GenerateResponse from 'src/utils/GenerateResponse';

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
    updateJerseyDto: UpdateJerseyDto,
  ) {
    return this.jerseyService.update(id, updateJerseyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jerseyService.remove(id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Put, Query } from '@nestjs/common';
import { StandardsService } from './standards.service';
import { CreateStandardDto } from './dto/create-standard.dto';
import { UpdateStandardDto } from './dto/update-standard.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Standards")
@Controller('standards')
@UsePipes(ValidationPipe)
export class StandardsController {
  constructor(private readonly standardsService: StandardsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createStandardDto: CreateStandardDto) {
    return this.standardsService.create(createStandardDto);
  }

  @Get()
  async findAll(@Body() any/*standard_id?: string*/) {
    //const standards = this.standardsService.findAll(); 
    //return standards;

    /*if (standard_id) {
      return this.standardsService.findOne(standard_id);
    } else {
      return this.standardsService.findAll();
    }*/

    return this.standardsService.findAll();
  }

  @Get(':standard_id')
  findOne(@Param('standard_id') standard_id: string) {
    return this.standardsService.findOne(standard_id);
  }

  @Put(':standard_id')
  update(@Param('standard_id') standard_id: string, @Body() updateStandardDto: UpdateStandardDto) {
    return this.standardsService.update(standard_id, updateStandardDto);
  }

  @Delete(':standard_id')
  remove(@Param('standard_id') standard_id: string) {
    return this.standardsService.remove(standard_id);
  }
}
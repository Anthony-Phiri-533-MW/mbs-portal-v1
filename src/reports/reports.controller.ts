import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe, Put } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createReportDto: CreateReportDto) {
    return this.reportsService.create(createReportDto);
  }

  @Get()
  async findAll() {
    const reports = this.reportsService.findAll();
    return reports;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportsService.findOne(+id);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
    return this.reportsService.update(+id, updateReportDto);
  }*/

  @Put(':id')
  updateProductById(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateReportDto: UpdateReportDto){
      this.reportsService.update(id,updateReportDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.reportsService.remove(+id);
  }
}

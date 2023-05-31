import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { CreateInspectionsDto } from './dto/create-inspection.dto';
import { UpdateInspectionDto } from './dto/update-inspection.dto';

@Controller('booking')
@UsePipes(ValidationPipe)
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('/appointments')
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get('/appointments')
  findAll() {
    return this.bookingService.findAll();
  }

  @Get('/appointments/:id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @Put('/appointments/:id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @Delete('/appointments/:id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }


  //inspections routes
  @Post('/inspections')
  createInspections(@Body() createInspectionDto: CreateInspectionsDto) {
    return this.bookingService.createInspection(createInspectionDto);
  }

  @Get('/inspections')
  findAllInspection() {
    return this.bookingService.findAllInspections();
  }

  @Get('/inspections/:id')
  findOneInspections(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @Put('/inspections/:id')
  updateInspections(@Param('id') id: string, @Body() updateInspectionDto: UpdateInspectionDto) {
    return this.bookingService.updateInspection(+id, updateInspectionDto);
  }

  @Delete('/inspections/:id')
  removeInspections(@Param('id') id: string) {
    return this.bookingService.removeInspection(+id);
  }
}

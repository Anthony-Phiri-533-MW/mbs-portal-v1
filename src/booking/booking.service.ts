import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { CreateInspectionsDto } from './dto/create-inspection.dto';
import { UpdateInspectionDto } from './dto/update-inspection.dto';
import { Booking } from './entities/booking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointments } from 'src/typeorm/Appointments';
import { BookingInspections } from 'src/typeorm/Inspections';

@Injectable()
export class BookingService {

  constructor(
    @InjectRepository(Booking, 'booking')
    private readonly bookingRepo: Repository<Booking>,
    @InjectRepository(BookingInspections, 'bookingInspections')
    private readonly inspectionRepo: Repository<BookingInspections>
  ){}

  create(createBookingDto: CreateBookingDto) {
    const newBooking = this.bookingRepo.create(createBookingDto)
    return this.bookingRepo.save(newBooking);
  }

  findAll() {
    return this.bookingRepo.find()
  }

  async findOne(id: number) {
    return await this.bookingRepo.findOne({ where: { id } });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepo.update({id}, { ...updateBookingDto});
  }

  remove(id: number) {
    return this.bookingRepo.delete({ id });
  }

  //inspections service methods

  createInspection(createInspectionDto: CreateInspectionsDto) {
    const newInspection = this.inspectionRepo.create(createInspectionDto)
    return this.inspectionRepo.save(newInspection);
  }

  findAllInspections() {
    return this.inspectionRepo.find()
  }

  async findOneInspection(id: number) {
    return await this.inspectionRepo.findOne({ where: { id } });
  }

  updateInspection(id: number, updateInspectionDto: UpdateInspectionDto) {
    return this.inspectionRepo.update({id}, { ...updateInspectionDto})
  }

  removeInspection(id: number) {
    return this.inspectionRepo.delete({ id });
  }
}

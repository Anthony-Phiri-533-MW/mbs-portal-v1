import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reports } from 'src/typeorm/Reports';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportsService {

  constructor(
    @InjectRepository(Reports, 'reports')
    private readonly reportsRepo: Repository<Reports>,
  ){}

  create(createReportDto: CreateReportDto) {
    const newReport = this.reportsRepo.create(createReportDto)
    return newReport;
  }

  findAll() {
    return this.reportsRepo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} report`;
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return this.reportsRepo.update({id}, { ...updateReportDto})
  }

  remove(id: number) {
    return this.reportsRepo.delete({ id });
  }
}

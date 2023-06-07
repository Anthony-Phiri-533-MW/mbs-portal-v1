import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Standards } from 'src/typeorm/Standards';
import { Repository } from 'typeorm';
import { CreateStandardDto } from './dto/create-standard.dto';
import { UpdateStandardDto } from './dto/update-standard.dto';

@Injectable()
export class StandardsService {

  constructor(
    @InjectRepository(Standards)
    private readonly standardsRepo: Repository<Standards>,
  ){}

  create(createStandardDto: CreateStandardDto) {
    const newProduct = this.standardsRepo.create(createStandardDto)
    return this.standardsRepo.save(newProduct);
  }

  findAll() {
    return this.standardsRepo.find()
  }

  async findOne(standard_id: string) {
    return await this.standardsRepo.findOne({ where: { standard_id } });
  }

  update(standard_id: string, updateStandardDto: UpdateStandardDto) {
    return this.standardsRepo.update({ standard_id }, { ...updateStandardDto})
  }

  remove(standard_id: string) {
    return this.standardsRepo.delete({ standard_id });
  }
}
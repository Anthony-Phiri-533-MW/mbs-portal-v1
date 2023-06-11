import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/Users';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private readonly usersRepo: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepo.create(createUserDto)
    return await this.usersRepo.save(newUser);
  }

  findAll() {
    return this.usersRepo.find()
  }

  async findOne(id: number) {
    return await this.usersRepo.findOne({ where: { id } })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepo.update({id}, { ...updateUserDto})
  }

  remove(id: number) {
    return this.usersRepo.delete({ id });
  }

  findOneByEmail(email: string){
    return this.usersRepo.findOne({ where: { email }});
  }
}
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Products } from 'src/typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products, 'w')
    private readonly productsRepo: Repository<Products>,
  ){}

  create(createProductDto: CreateProductDto) {
    const newProduct = this.productsRepo.create(createProductDto)
    return this.productsRepo.save(newProduct);
  }

  findAll() {
    return this.productsRepo.find()
  }

  async findOne(id: number) {
    return await this.productsRepo.findOne({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsRepo.update({id}, { ...updateProductDto})
  }

  remove(id: number) {
    return this.productsRepo.delete({ id });
  }
}

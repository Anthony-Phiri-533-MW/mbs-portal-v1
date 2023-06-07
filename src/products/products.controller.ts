import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Put, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll() {
    const products = this.productsService.findAll();
    return products;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }*/

  @Put(':id')
  updateProductById(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateProductDto: UpdateProductDto){
      this.productsService.update(id,updateProductDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.productsService.remove(+id);
  }
}
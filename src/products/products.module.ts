import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities, { Products } from 'src/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products,],'w')],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}

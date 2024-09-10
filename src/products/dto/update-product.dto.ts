import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty()
  productname: string;

  @ApiProperty()
  productnumber: string;

  @ApiProperty()
  manufacturer: string;

  @ApiProperty()
  description: string;
}

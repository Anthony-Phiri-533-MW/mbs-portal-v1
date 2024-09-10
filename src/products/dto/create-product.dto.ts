import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    type: String,
    description: 'The product name',
  })
  @IsNotEmpty()
  productname: string;

  @ApiProperty({
    type: String,
    description: 'The product number',
  })
  @IsNotEmpty()
  productnumber: string;

  @ApiProperty({
    type: String,
    description: "The product's manufacturer",
  })
  @IsNotEmpty()
  manufacturer: string;

  @ApiProperty({
    type: String,
    description: 'A short product description',
  })
  @IsNotEmpty()
  description: string;
}

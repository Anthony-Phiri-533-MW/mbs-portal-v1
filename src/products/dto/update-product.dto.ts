import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    productname: string;

    productnumber: string;

    manufacturer: string;

    description: string;
}

import {IsNotEmpty, MinLength} from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    productname: string;

    @IsNotEmpty()
    productnumber: string;

    @IsNotEmpty()
    manufacturer: string;

    @IsNotEmpty()
    description: string;
}

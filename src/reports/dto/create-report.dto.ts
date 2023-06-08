import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, MinLength} from 'class-validator';

export class CreateReportDto {
    @ApiProperty({
        type: String,
        description: "The manufacturer that is violating the standards",
    })
    @IsNotEmpty()
    manufacturer: string;

    @ApiProperty({
        type: String,
        description: "The simple desctiption of the violation being commited by the manufacturer",
    })
    @IsNotEmpty()
    report: string;
}

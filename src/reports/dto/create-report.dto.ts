import {IsNotEmpty, MinLength} from 'class-validator';

export class CreateReportDto {
    @IsNotEmpty()
    manufacturer: string;

    @IsNotEmpty()
    report: string;
}

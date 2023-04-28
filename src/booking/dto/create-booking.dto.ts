import { IsNotEmpty } from "class-validator";

export class CreateBookingDto {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    industry: string;

    @IsNotEmpty()
    mobileNumber: string;
}

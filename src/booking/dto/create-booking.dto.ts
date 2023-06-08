import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateBookingDto {

    @ApiProperty({
        type: String,
        description: "the auto generated id of the booking"
    })
    @IsNotEmpty()
    id: number;

    @ApiProperty({
        type: String,
        description: "the name of the user trying to access this endpoint",
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        description: "The industry that the user operates in",
    })
    @IsNotEmpty()
    industry: string;

    @ApiProperty({
        type: String,
        description: "the mobile number of the user trying to access this endpoint, the number should be a valid number",
    })
    @IsNotEmpty()
    mobileNumber: string;
}

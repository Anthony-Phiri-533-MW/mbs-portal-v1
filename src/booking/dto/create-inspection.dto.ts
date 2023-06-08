import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateInspectionsDto{
    @ApiProperty({
        type: String,
        description: "the name of the user trying to access this endpoint",
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        description: "the inspections type that they want, it might be Application for Permit to Apply Standardization Mark form, Application for Designation of premises form, or Food Handlers medical form",
    })
    @IsNotEmpty()
    type: string;

    @ApiProperty()
    @IsNotEmpty()
    industry: string;

    @ApiProperty()
    @IsNotEmpty()
    mobileNumber: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;
}
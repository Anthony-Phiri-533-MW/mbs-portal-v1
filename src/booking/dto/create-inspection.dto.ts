import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateInspectionsDto{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    industry: string;

    @IsNotEmpty()
    mobileNumber: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}
import { IsNotEmpty } from "class-validator";

export class CreateInspectionsDto{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    industry: string;

    @IsNotEmpty()
    mobileNumber: string;

    @IsNotEmpty()
    email: string;
}
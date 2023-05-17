import { IsNotEmpty } from "class-validator";

export class CreateStandardDto {
    @IsNotEmpty()
    standard_id: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    industry: string;

    @IsNotEmpty()
    penalty: string;
}

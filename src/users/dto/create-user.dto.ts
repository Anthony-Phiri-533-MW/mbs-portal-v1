import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsPhoneNumber("MW")
    @IsNotEmpty()
    phonenumber: string;

    
    type: string;

    @IsNotEmpty()
    password: string;

    
    role: string;
}

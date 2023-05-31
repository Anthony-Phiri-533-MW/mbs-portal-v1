import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    
    username: string;

    email: string;

    phonenumber: string;
    
    type: string;

    password: string;
}

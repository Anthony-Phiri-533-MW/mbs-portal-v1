import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    username: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phonenumber: string;
    
    @ApiProperty()
    type: string;

    @ApiProperty()
    password: string;
}

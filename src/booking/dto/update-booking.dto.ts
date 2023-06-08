import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookingDto } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
    @ApiProperty()
    name: string;

    @ApiProperty()
    industry: string;

    @ApiProperty()
    mobileNumber: string;
}

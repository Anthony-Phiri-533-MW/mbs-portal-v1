import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateStandardDto } from './create-standard.dto';

export class UpdateStandardDto extends PartialType(CreateStandardDto) {
    
    @ApiProperty()
    standard_id: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    industry: string;

    @ApiProperty()
    penalty: string;
}

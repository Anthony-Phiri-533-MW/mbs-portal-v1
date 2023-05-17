import { PartialType } from '@nestjs/swagger';
import { CreateStandardDto } from './create-standard.dto';

export class UpdateStandardDto extends PartialType(CreateStandardDto) {
    
    standard_id: string;

    description: string;

    industry: string;

    penalty: string;
}

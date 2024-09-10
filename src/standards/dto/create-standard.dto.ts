import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStandardDto {
  @ApiProperty()
  @IsNotEmpty()
  standard_id: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  industry: string;

  @ApiProperty()
  @IsNotEmpty()
  penalty: string;
}

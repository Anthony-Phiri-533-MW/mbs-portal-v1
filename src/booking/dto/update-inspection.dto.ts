import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateInspectionsDto } from './create-inspection.dto';

export class UpdateInspectionDto extends PartialType(CreateInspectionsDto) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  industry: string;

  @ApiProperty()
  mobileNumber: string;

  @ApiProperty()
  email: string;
}

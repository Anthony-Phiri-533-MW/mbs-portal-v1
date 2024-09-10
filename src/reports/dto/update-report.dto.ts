import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateReportDto } from './create-report.dto';

export class UpdateReportDto extends PartialType(CreateReportDto) {
  @ApiProperty()
  manufacturer: string;

  @ApiProperty()
  report: string;
}

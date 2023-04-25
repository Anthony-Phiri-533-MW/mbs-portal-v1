import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { Reports } from 'src/typeorm/Reports';

@Module({
  imports: [TypeOrmModule.forFeature([Reports,],'reports')],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}

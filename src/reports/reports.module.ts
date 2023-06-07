import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { Reports } from 'src/typeorm/Reports';
import { MiddlewareConsumer, NestModule } from '@nestjs/common/interfaces';
import { ValidateReportMiddleware } from './middleware/validate-report.middleware';
import { RequestMethod } from '@nestjs/common/enums';

@Module({
  imports: [],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateReportMiddleware)
    .forRoutes({
      path: 'reports/:id', 
      method: RequestMethod.GET
    })
  }
}

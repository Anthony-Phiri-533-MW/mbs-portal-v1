import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ReportsModule } from './reports/reports.module';
import { BookingModule } from './booking/booking.module';
import { StandardsModule } from './standards/standards.module';
import { UsersModule } from './users/users.module';
import {
  Products,
  Reports,
  Appointments,
  BookingInspections,
  Standards,
  Users,
  Booking,
} from './typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE,
      synchronize: false, // set to false in production
      logging: false, // set to false in production
      autoLoadEntities: true, // Load entities automatically
      entities: [
        Products,
        Reports,
        Appointments,
        BookingInspections,
        Standards,
        Users,
        Booking,
      ],
    }),
    ProductsModule,
    ReportsModule,
    BookingModule,
    StandardsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

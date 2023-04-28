import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Products } from './typeorm';
import { ReportsModule } from './reports/reports.module';
import { Reports } from './typeorm/Reports';
import { Appointments } from './typeorm/Appointments';
import { BookingInspections } from './typeorm/Inspections';
import { BookingModule } from './booking/booking.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
//import entities from './typeorm';

const defaultOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'mbsportal_api_users',
      password: '',
      entities: [],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'products',
      password: '',
      name: 'w',
      entities: [Products],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'reports',
      password: '',
      name: 'reports',
      entities: [Reports],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'booking',
      password: '',
      name: 'booking',
      entities: [Appointments],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'booking',
      password: '',
      name: 'bookingInspections',
      entities: [BookingInspections],
    } as any),
    ProductsModule,
    ReportsModule,
    BookingModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

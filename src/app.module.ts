import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Products } from './typeorm';
import { ReportsModule } from './reports/reports.module';
import { Reports } from './typeorm/Reports';
import { Appointments } from './typeorm/Appointments';
import { BookingInspections } from './typeorm/Inspections';
import { BookingModule } from './booking/booking.module';
import { StandardsModule } from './standards/standards.module';
import { Standards } from './typeorm/Standards';
import { UsersModule } from './users/users.module';
import { Users } from './typeorm/Users';
//import entities from './typeorm';
import { createConnections } from 'typeorm';

/*const defaultOptions = {
  type: 'postgres',
  host: 'db.fuxcvihidghyeqhjtcjq.supabase.co',
  port: 5432,
  username: 'postgres',
  synchronize: true,
};*/

const defaultOptions = {
  type: 'mysql',
  database: 'mbsportal_mb',
  username: 'ngml2u38ez12w7qpckmr',
  host: 'aws.connect.psdb.cloud',
  password: 'pscale_pw_UfqBI2PAC1mOCjB3RBQNe5iAo301FbfCZP28ALp185G',
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...defaultOptions,
      //database: 'postgres',
      //password: 'Tony1234@@##1234',
      entities: [Products],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      //database: 'postgres',
      //password: 'Tony1234@@##1234',
      entities: [Reports],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      //database: 'postgres',
      //password: 'Tony1234@@##1234',
      entities: [Appointments],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      //database: 'postgres',
      //password: 'Tony1234@@##1234',
      entities: [BookingInspections],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      //database: 'postgres',
      //password: 'Tony1234@@##1234',
      entities: [Standards],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      //database: 'postgres',
      //password: 'Tony1234@@##1234',
      entities: [Users],
    } as any),
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
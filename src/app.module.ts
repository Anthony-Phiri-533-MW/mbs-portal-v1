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
import { Booking } from './typeorm/Booking';

/*const defaultOptions = {
  type: 'postgres',
  host: 'db.fuxcvihidghyeqhjtcjq.supabase.co',
  port: 5432,
  username: 'postgres',
  synchronize: true,
};*/

/*const defaultOptions = {
  type: 'mysql',
  database: 'mbsportal_mb',
  username: 'ngml2u38ez12w7qpckmr',
  host: 'aws.connect.psdb.cloud',
  password: 'pscale_pw_UfqBI2PAC1mOCjB3RBQNe5iAo301FbfCZP28ALp185G',
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
*/


const defaultOptions = {
  /*type: 'mysql',
  database: 'sql7624753',
  username: 'sql7624753',
  host: 'http://sql7.freesqldatabase.com/',
  password: 'drcpBernuN',
  port:  3306,
  synchronize: false,*/
};



/*const defaultOptions = {
  type: 'postgres',
  url: 'postgres://rhgsjbem:r1bYewS5zOZtrzveStYHIvbfJJTX_P8j@lucky.db.elephantsql.com/rhgsjbem',
  synchronize: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
      ca: 'google certificate.crt'
      ssl: true,
    },
  }
};
*/


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql7.freesqldatabase.com',
      port: 3306,
      username: 'sql7624753',
      password: 'drcpBernuN',
      database: 'sql7624753',
      synchronize: false, // set to false in production
      logging: false, // set to false in production,
      autoLoadEntities: false,
      entities: [Products,Reports,Appointments,BookingInspections,Standards,Users, Booking],
    }),
    /*TypeOrmModule.forRoot({
      ...defaultOptions,
      //database: 'postgres',
      //password: 'Tony1234@@##1234',
      entities: [Products],
    } as any),*/

    /*
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
    } as any),*/
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
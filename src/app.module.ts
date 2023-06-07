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
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
//import entities from './typeorm';
//import { SupabaseModule } from './supabase/supabase.module';
import  SupabaseModule  from '@supabase/supabase-js';

const defaultOptions = {
  type: 'mysql',
  host: 'aws.connect.psdb.cloud',
  username: 'azhrtl0jxgk5a02wreot',
  synchronize: true,
};

@Module({
  imports: [
    //SupabaseModule.forRoot({
    //  supabaseUrl: 'YOUR_SUPABASE_URL',
    //  supabaseKey: 'YOUR_SUPABASE_KEY',
    //}),
    //SupabaseModule,
    
    /*ProductsModule,
    ReportsModule,
    BookingModule,
    StandardsModule,
    UsersModule,
    ConfigModule.forRoot(),*/
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

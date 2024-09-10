import { Module } from '@nestjs/common';
import { StandardsService } from './standards.service';
import { StandardsController } from './standards.controller';
import { Standards } from 'src/typeorm/Standards';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Standards])],
  controllers: [StandardsController],
  providers: [StandardsService],
})
export class StandardsModule {}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reports {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  manufacturer: string;

  @Column()
  report: string;
}

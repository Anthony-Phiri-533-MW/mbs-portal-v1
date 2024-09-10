import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Standards {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  standard_id: string;

  @Column()
  description: string;

  @Column()
  industry: string;

  @Column()
  penalty: string;
}

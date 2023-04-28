import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class Appointments {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number;

    @Column()
    name: string;

    @Column()
    industry: string;

    @Column()
    mobileNumber: string;
}
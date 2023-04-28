import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class BookingInspections{
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    industry: string;

    @Column()
    mobileNumber: string;

    @Column()
    email: string;
}
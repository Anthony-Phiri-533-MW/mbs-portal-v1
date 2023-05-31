import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class Users {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    type: string;

    @Column()
    phonenumber: string;

    @Column()
    password: string;

    @Column()
    role: string;

}
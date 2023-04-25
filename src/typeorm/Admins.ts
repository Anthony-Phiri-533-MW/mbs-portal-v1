import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class Admins {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number;

    @Column({
        name:"name"
    })
    admin_name: string;

    @Column({
        name:"email"
    })
    admin_email: string;

    @Column()
    mobile_number: string;

    @Column()
    admin_code: string;

    @Column()
    password: string;

}
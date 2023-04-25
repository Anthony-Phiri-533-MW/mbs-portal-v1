import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class Products {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number;

    @Column()
    productname: string;

    @Column()
    productnumber: string;

    @Column()
    manufacturer: string;

    @Column()
    description: string;
}

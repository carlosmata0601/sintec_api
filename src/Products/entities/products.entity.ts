import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductType } from "./productType.entity";



@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 100 })
    name: string;
    @Column({ length: 256 })
    photo: string;
    @Column({ default: true, nullable: true })
    active: boolean;
    @Column()
    count: number;
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @ManyToMany(type => ProductType)
    @JoinTable({ name: 'types' })
    types: ProductType[];
}
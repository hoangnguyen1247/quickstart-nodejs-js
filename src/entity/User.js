import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Category } from "./Category";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id = null;

    @Column("varchar")
    fullName = "";
}

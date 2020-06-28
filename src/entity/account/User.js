import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";

import { BaseEntity } from "./BaseEntity";

@Entity("user")
export class User extends BaseEntity {

    @Column("varchar")
    fullName = "";
}

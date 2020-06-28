import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";

import { BaseEntity } from "./BaseEntity";

export class User extends BaseEntity {

    fullName = "";
}

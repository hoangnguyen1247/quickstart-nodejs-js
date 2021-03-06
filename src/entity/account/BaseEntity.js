import { PrimaryGeneratedColumn, Column } from "typeorm";

import { newMySQLDateISOString } from "../../utils/DateTimeUtils";

export class BaseEntity {

    @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
    id: number;

    @Column({ name: "createdDate", type: "varchar", length: 32, default: "" })
    createdDate: string;

    @Column({ name: "createdBy", type: "bigint", nullable: true })
    createdBy: number;

    @Column({ name: "lastModifiedDate", type: "varchar", length: 32, default: "" })
    lastModifiedDate: string;

    @Column({ name: "lastModifiedAction", type: "varchar", length: 256, default: "" })
    lastModifiedAction: string;

    @Column({ name: "lastModifiedBy", type: "bigint", nullable: true })
    lastModifiedBy: number;

    constructor(entityDto) {
        if (typeof entityDto === "object") {
            if (entityDto.id) {
                this.id = entityDto.id;
            }
            this.createdDate = entityDto.createdDate || newMySQLDateISOString();
            this.createdBy = entityDto.createdBy || null;
            this.lastModifiedDate = entityDto.lastModifiedDate || newMySQLDateISOString();
            this.lastModifiedAction = entityDto.lastModifiedAction || "";
            this.lastModifiedBy = entityDto.lastModifiedBy || null;
        }
    }
}

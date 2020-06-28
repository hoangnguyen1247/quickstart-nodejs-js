import { PrimaryGeneratedColumn, Column } from "typeorm";

import { newMySQLDateISOString } from "../../utils/DateTimeUtils";

export class BaseEntity {

    id;

    createdDate;

    createdBy;

    lastModifiedDate;

    lastModifiedAction;

    lastModifiedBy;

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

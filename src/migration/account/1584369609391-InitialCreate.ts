import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialCreate1584369609391 implements MigrationInterface {
    name = 'InitialCreate1584369609391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` bigint NOT NULL AUTO_INCREMENT, `createdDate` varchar(32) NOT NULL DEFAULT '', `createdBy` bigint NULL, `lastModifiedDate` varchar(32) NOT NULL DEFAULT '', `lastModifiedAction` varchar(256) NOT NULL DEFAULT '', `lastModifiedBy` bigint NULL, `fullName` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}

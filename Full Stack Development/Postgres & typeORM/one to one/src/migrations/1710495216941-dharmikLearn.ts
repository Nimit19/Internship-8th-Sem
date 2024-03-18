import { MigrationInterface, QueryRunner } from "typeorm";

export class DharmikLearn1710495216941 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "auth" RENAME COLUMN "role" TO "userRole"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "auth" RENAME COLUMN "userRole" TO "role"`
    );
  }
}

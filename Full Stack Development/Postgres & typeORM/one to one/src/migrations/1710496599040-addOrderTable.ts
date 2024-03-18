import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOrderTable1710496599040 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "order" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "totalAmount" varchar NOT NULL,
            "status" varchar NOT NULL,
            CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "order"`);
  }
}

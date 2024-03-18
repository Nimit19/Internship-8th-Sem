import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAuthEventTable1710594255292 implements MigrationInterface {
  transaction?: false;
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "auth" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_1e7a3b0821f52883959bfa6ce54" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "imageUrl" character varying NOT NULL, "date" character varying NOT NULL, "authId" uuid, CONSTRAINT "PK_5e8bf46b4f87dd46fa349b79807" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "event" ADD CONSTRAINT "FK_5b590ee32c2b94b731b87b3b9b7" FOREIGN KEY ("authId") REFERENCES "auth"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "event" DROP CONSTRAINT "FK_5b590ee32c2b94b731b87b3b9b7"`
    );
    await queryRunner.query(`DROP TABLE "event"`);
    await queryRunner.query(`DROP TABLE "auth"`);
  }
}

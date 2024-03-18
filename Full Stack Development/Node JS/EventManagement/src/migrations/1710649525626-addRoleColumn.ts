import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddRoleColumn1710649525626 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "auth",
      new TableColumn({
        name: "role",
        type: "varchar",
        default: "'user'",
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("auth", "role");
  }
}

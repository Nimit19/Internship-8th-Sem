import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "nimit1907",
  database: "typeormOneToOne",
  entities: ["src/entities/*{.ts,.js}"],
  // synchronize: true,
  migrations: ["src/migrations/*.ts"],
  logging: ["query", "error"],
});

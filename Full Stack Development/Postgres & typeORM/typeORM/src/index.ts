import "reflect-metadata";
import express, { Express } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { router as userRouter } from "./routes/userRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", userRouter);
// app.use();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "nimit1907",
  database: "typeorm_db",
  entities: ["src/entities/*{.ts,.js}"],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(port, () =>
      console.log(`Server started: http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

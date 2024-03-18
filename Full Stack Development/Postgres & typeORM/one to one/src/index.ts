import express, { Express } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { router as authRouter } from "./routes/authRoutes";
import { router as profileRouter } from "./routes/profileRouter";
import { AppDataSource } from "./data-source";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/profiles", profileRouter);

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

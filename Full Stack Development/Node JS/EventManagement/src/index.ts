import express, { Express } from "express";
import dotenv from "dotenv";

// import errorHandler from "./middlewares/error.middleware";
import { AppDataSource } from "./data-source";
import { authRoute, eventRoute } from "./routes";
import { errorHandler } from "./middlewares";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

// BuiltIn Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Welcome To the Events Management System...");
});

app.use("/events", eventRoute);
app.use("/auth", authRoute);

// Middleware To Error Handler
app.use(errorHandler);

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

// 1. connect to postres
// 2. migration
// 3. CRUD Operations / One to many relationships
// 4. Authentication
// 5. Authorization
// 6. Joi Validation

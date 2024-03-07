const express = require("express");
const app = express();
const PORT = 8000;
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");

app.use(express.urlencoded({ extended: true }));

app.use(logReqRes("log.txt"));

app.use("/user", userRouter);

app.listen(PORT, () => console.log("Server Started: http://localhost:8000/"));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/db.js");
const userRouter = require("./routers/user.router.js");

connectToDb();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(`hello Uber ${req.method}`);
  res.send("Hello Uber");
});

app.use("/users", userRouter);

module.exports = app;

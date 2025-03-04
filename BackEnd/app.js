require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const connectToDb = require("./db/db.js");
const userRouter = require("./routers/user.router.js");

connectToDb();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/", (req, res) => {
  console.log(`hello Uber ${req.method}`);
  res.json({"message":"Hello Uber"});
});

app.use("/users", userRouter);

module.exports = app;

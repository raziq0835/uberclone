require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const connectToDb = require("./db/db.js");
const userRouter = require("./routers/user.router");
const captanRouter = require('./routers/captan.router')

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

app.use("/users",
  // console.log(typeof userRouter),
  // console.log (userRouter) ,
  userRouter);



app.use('/captan'
//   console.log(typeof captanRouter),
//   console.log(captanRouter)
  ,captanRouter)

module.exports = app;

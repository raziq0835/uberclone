const mongoose = require("mongoose");
require("dotenv").config();

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("Connected to db"))
    .catch(() => console.log("Something went wrong"));
}

module.exports = connectToDb;

// Ox4yzi7HjpYuz4vR

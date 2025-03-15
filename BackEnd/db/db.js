const mongoose = require("mongoose");
require("dotenv").config();

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to db"))
    .catch(() => console.log("Something went wrong"));
}

module.exports = connectToDb;

// Ox4yzi7HjpYuz4vR


//  59u2wmOzdSWJMsti


// {
//   "fullName":{
//       "firstName":"Ramu",
//       "lastName":"B"
//   },
//   "vehicle":{
//       "color":"red",
//       "seat":6,
//       "type":"car",
//       "plate":254

//   },
//   "status":"active",
//   "password":"Root@123",
//   "email":"document123@gmail.com"
// }
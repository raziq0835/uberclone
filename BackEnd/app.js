require('dotenv').config();
const express = require('express');
const cors = require('cors')
const connectToDb = require('./db/db.js');

// connectToDb() 
const app = express()

app.use(cors());

app.get('/',(req,res) =>{
    console.log(`hello Uber ${req.method}`);
    res.send("Hello Uber")
})


module.exports = app;
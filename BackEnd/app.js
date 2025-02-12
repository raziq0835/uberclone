require('dotenv').config();
const express = require('express');
const cors = require('cors')


const app = express();

app.use(cors());

app.get('/',(req,res) =>{
    console.log(`hello Uber ${req.method}`);
    res.send("Hello Uber")
})


module.exports = app;
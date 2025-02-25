const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(DB_CONNECT)
    .then(() => 
        console.log("Connected to db"))
    .catch(()=> 
        console.log("Something went wrong"))
}

module.exports = connectToDb;

// Ox4yzi7HjpYuz4vR
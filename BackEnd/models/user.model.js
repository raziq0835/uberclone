const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            min:[3,"The size for fName shouold be atleast 3 letters"]
        },
    lastName:{
        type:String,
        min:[3,'The min length for last name should be 3']
    }
    },
    email:{
        type:email,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    socketId:{
        type:String,
        require:true
    }
})

userSchema.methods.get
require('dotenv').config();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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
        type:String,
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

userSchema.methods.generateAuthToken = function(password) {
    const jsonToken =  jwt.sign({_id:this._id},process.env.ACCESS_SECRET_KEY)
    return jsonToken;

} 

userSchema.methods.passwordCompare = async function(password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10)
}

const User = mongoose.model("user",userSchema);

module.exports = User;
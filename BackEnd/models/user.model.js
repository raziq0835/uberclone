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

userSchema.methods.generateAuthToken = async function() {
    const jsonToken = await jwt.sign({_id:this._id},process.env.ACCESS_SECRRET_KEY)
    return jsonToken;

} 

userSchema.methods.passwordCompare = async function(password) {
    return bcrypt.compare(this.password,password)
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10)
}

const User = mongoose.model("user",userSchema);
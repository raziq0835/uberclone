const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')



const captanSchema = new mongoose.Schema({
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
    },
    status:{
        type:String,
        enum:['active','inactive'],
    },
    vehicle :{
        color:{
            type:String,
            require:true,
        },
        seat : {
            type:Number,
            require:true,
            min:[1,"The number of avaible seat should be atleast 1"]
        },
        type:{
            type:String,
            require:true,
            enum:['car','bike','auto']
        },
        plate:{
            type:Number,
            require:true,
        }

    }

})

captanSchema.methods.genAuthToken = function(){
    const token = jwt.sign({_id:this._id},ACCESS_SECRET_KEY,{expiresIn:'1H'})
    return token ;

}

captanSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password,this.password)
}

captanSchema.statics.hashPassword = async function(password){
    return await bcrypt.hashPassword(password,ACCESS_SECRET_KEY)
}


const captanModel = mongoose.model('captanModel',captanSchema)

module.exports = captanModel;
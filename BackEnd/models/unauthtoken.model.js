const userModel = require('../models/user.model')
const mongoose  = require('mongoose')

const unauthtokenSchema = new mongoose.Schema({
    token:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:3600
    },

})

unauthtokenSchema.statics.addToUnauthList = async function(token) {
    const unauthTokens = new Unauthtokens({
        token
    })
    await unauthTokens.save()
}

unauthtokenSchema.statics.checkUnauthList = async function(token) {
    const unauthToken = await Unauthtokens.findOne
    ({
        token
    })  
    return unauthToken
}

const Unauthtokens = mongoose.model("unauthtoken",unauthtokenSchema);

module.exports = Unauthtokens;
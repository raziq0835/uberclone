const captanModel = require('../models/captan.model')


exxports.createCaptan = async function(firstName,lastName,seat,color,type,status,email,password){
    const captan = captanModel.create(firstName,lastName,seat,color,type,status,email,password)
    return captan
}
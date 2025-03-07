const captanModel = require('../models/captan.model')


exxports.createCaptan = async function(firstName,lastName,seat,color,type,plate,status,email,password){
    const captan = await captanModel.create({
        fullName:{
            firstName:firstName,
            lastName:lastName
        },
        vehicle:{
            seat:seat,
            color:color,
            type:type,
            plate:plate

        },
        status:null,
        email:email,
        password:password
    })
    return captan
}
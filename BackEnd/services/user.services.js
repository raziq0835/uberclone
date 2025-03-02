const userModel = require('../models/user.model')

exports.createUser = async function(firstName,lastName,email,password){
    console.log(firstName,lastName,email,password)
    if(!firstName || !email || !password){
        throw new Error("All fielda are required ");
    }

    const user =  await userModel.create({
        fullName:
            {
                firstName,
                lastName
            },
        email,
        password
    })

    return user;
}
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')


exports.isUserLoged = async (req,res,next) => {
    const token =   (req.header('Authorization') ? req.header('Authorization').split(' ')[1] : null);

    if(!token)
        res.status(400).json({messege:"Unauthorized"})

    try{
        const decoded = jwt.verify(token,process.env.ACCESS_SECRET_KEY)

        const user = await userModel.findById(decoded._id)

        req.user = user

        return next()
    }catch(err){
        res.status(400).json({messege:"Unauthorized"})
    }
}
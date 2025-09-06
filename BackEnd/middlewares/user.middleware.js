const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const unauthTokenModel = require('../models/unauthtoken.model')


module.exports.isUserLoged = async (req,res,next) => {
    const token =  req.cookies.token || (req.header('Authorization') ? req.header('Authorization').split(' ')[1] : null);
    if(!token)
        return res.status(400).json({messege:"Unauthorized Please Login"})
    const unauthToken = await unauthTokenModel.checkUnauthList(token)
    console.log(unauthToken)
    if(unauthToken)
        return res.status(400).json({messege:"Unauthorized Please Login"})


    try{
        const decoded = jwt.verify(token,process.env.ACCESS_SECRET_KEY)

        const user = await userModel.findById(decoded._id)

        req.user = user

        return next()
    }catch(err){
        return res.status(400).json({messege:"Unauthorized Please Login"})
    }
}
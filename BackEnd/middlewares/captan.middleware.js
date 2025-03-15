const captanModel = require("../models/captan.model");

exports.isCaptanLoged = async (req,res,nest) =>{
    token = req.cookies.token || req.header('Authorization')?req.header('Authorization').split(' ')[1]:null;

    if(!token){
        return res.status(400).json({message:"UnAuthorized"})
    }

    const decoded = jwt.verify(token,process.env.ACCESS_SECRET_KEY);
    const captan = await captanModel.findById(decoded._id)
    if(!captan){
        return res.status(400).json({message:"UnAuthorized"})
    }
    req.captan = captan;
    next();
}


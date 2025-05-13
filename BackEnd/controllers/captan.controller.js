const captanModel = require('../models/captan.model')
const {validationResult} = require('express-validator')
const captanServices = require('../services/captan.services')
const unauthTokenModel = require('../models/unauthtoken.model')


exports.captanRegister = async function(req,res,next){
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(401).json({ errors: errors.array() });
  }

  const { fullName, email, password ,vehicle , status} = req.body;
  var captan = await captanModel.findOne({
    email
  });
   
  if (captan) {
    return res.status(401).json({ message: "Email already exists" });
  }
  const hashPassword = await captanModel.hashPassword(password);

  var captan = await captanServices.createCaptan(
    fullName.firstName,
    fullName.lastName,
    vehicle.seat,
    vehicle.color, 
    vehicle.type,
    vehicle.plate,     
    status, 
    email, 
    hashPassword
  );

  const token = captan.genAuthToken();
  res.status(201).json({ token, captan });
  console.log(captan);
}  

exports.captanLogin  = async function(req,res,next){
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(401).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  console.log(email);  
  console.log(password);
  var captan = await captanModel.findOne({
    email
  }).select("+password");
  

  if (!captan) {
    return res.status(401).json({ message: "Invalid email" });
  }

  const isValid = await captan.comparePassword(password);
  if (!isValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = captan.genAuthToken();
  res.cookie("token", token, { httpOnly: true });
  res.status(200).json({ token, captan });
}

exports.getProfile = function(req,res,next){
    res.status(200).json(req.captan);
}

exports.captanLogout = function (req, res, next) {
  res.clearCookie("token");
  const token =
    req.cookies.token ||
    (req.header("Authorization")
      ? req.header("Authorization").split(" ")[1]
      : null);
  const unauthtoken = unauthTokenModel.addToUnauthList(token);

  res.status(200).json({ message: "Logout" });
};
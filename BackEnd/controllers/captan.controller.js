const captanModel = require('../models/captan.model')
const {validationResult} = require('express-validator')


exports.captanRegister = async function(req,res,nest){
    const errors = validationResult(req);
  if (!errors.isEmpty) {
    res.status(401).json({ errors: errors.array() });
  }

  const { fullName, email, password ,vehicle , status} = req.body;
  var captan = await captanModel.findOne({
    email,
  });

  if (captan) {
    return res.status(401).json({ message: "Email already exists" });
  }
  const hashPassword = await captanModel.hashPassword(password);

  var captan = await userServices.createUser(
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

  const token = captan.genAuthtoken();
  res.status(201).json({ token, user });
}
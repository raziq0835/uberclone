require('dotenv').config();
const userModel = require("../models/user.model")
const userServices = require('../services/user.services')
const {validationResult} = require('express-validator')

exports.userRegister = async function(req , res, nest){
    const errors = validationResult(req);
    if(!errors.isEmpty){
        res.status(401).json({errors : errors.array()})
    }
 
    const {fullName,email,password} = req.body;

    const hashPassword = await userModel.hashPassword(password);

    const user = await userServices.createUser(
        fullName.firstName,
        fullName.lastName,
        email,
        hashPassword
    );

    const token = user.generateAuthToken()
    res.status(201).json({token, user});





}
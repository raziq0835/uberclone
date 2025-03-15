const  captanModel = require('../models/captan.model')
const express = require('express')
const captanController = require('../controllers/captan.controller')
const {body} = require('express-validator')

const captanRouter = express.Router();

captanRouter.post('/register',
  [
    body("email").isEmail().withMessage("Invalid email format "),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("The first name must be minimum 3"),
    body("password")
      .isLength({ min: 6 })
      .withMessage(
        "The password must contains one alphabet and a single digit"
      ),
    body('vehicle.plate').isNumeric().withMessage("The plate number is require"),
    body('vehicle.seat').isNumeric().withMessage("The number of availble seat is require"),
    body('vehicle.color').isLength({min:3}).withMessage("The color should be mentioned "),
    body('vehicle.type').isLength({min:3}).withMessage("The vehicle type is required require")
],
// console.log(typeof captanController.captanRegister),
// console.log(captanController.captanRegister),

captanController.captanRegister
)

module.exports = captanRouter;


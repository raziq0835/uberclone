const express = require("express");
const { body, validatorResult } = require("express-validator");
const userController = require("../controllers/user.controller");

const Router = express.Router();

Router.post(
  "/register",
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
  ],
  userController.userRegister
);

Router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength().withMessage("Invalid password"),
  ],

  userController.userLogin
); 

module.exports = Router;

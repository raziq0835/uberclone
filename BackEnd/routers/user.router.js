const express = require("express");
const { body, validatorResult } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/user.middleware");

const userRouter = express.Router();

userRouter.post(
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

  // console.log(typeof userController.userRegister),
  // console.log(userController
  //   .userRegister),


  userController.userRegister
);

userRouter.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min : 6})
    .withMessage("Invalid password"),
  ],

  userController.userLogin
);

userRouter.get("/profile", authMiddleware.isUserLoged, userController.getProfile);

userRouter.post("/logout", authMiddleware.isUserLoged, userController.userLogout);

module.exports = userRouter;

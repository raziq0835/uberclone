require("dotenv").config();
const userModel = require("../models/user.model");
const userServices = require("../services/user.services");
const { validationResult } = require("express-validator");
const unauthTokenModel = require("../models/unauthtoken.model");

exports.userRegister = async function (req, res, nest) {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    res.status(401).json({ errors: errors.array() });
  }

  const { fullName, email, password } = req.body;
  var user = await userModel.findOne({
    email,
  });

  if (user) {
    return res.status(401).json({ message: "Email already exists" });
  }
  const hashPassword = await userModel.hashPassword(password);

  var user = await userServices.createUser(
    fullName.firstName,
    fullName.lastName,
    email,
    hashPassword
  );

  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

exports.userLogin = async function (req, res, next) {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(401).json({ error: error.array() });
  }

  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid" });
  }
  console.log(user);
  console.log(user.password);

  const match = await user.passwordCompare(password);
  console.log(match);
  if (!match) {
    return res.status(401).json({ message: "Invalid password" });
  }
  console.log(match);

  const token = user.generateAuthToken();

  res.cookie("token", token);

  return res.status(200).json({ user, token });
};

exports.getProfile = function (req, res, next) {
  res.status(200).json(req.user);
};

exports.userLogout = function (req, res, next) {
  res.clearCookie("token");
  const token =
    req.cookies.token ||
    (req.header("Authorization")
      ? req.header("Authorization").split(" ")[1]
      : null);
  const unauthtoken = unauthTokenModel.addToUnauthList(token);

  res.status(200).json({ message: "Logout" });
};

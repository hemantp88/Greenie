const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const User = require("../models/User");
const authMiddleware = require("../middleware/auth");

router.get("getUserByUserId/:userId", authMiddleware, async (req, res) => {
  let id = req.params.userId;
  let user = await User.findOne({ _id: id });
  if (user) {
    return res.json({ tag: true, message: obj });
  }
  return res.json({ tag: false, message: {} });
});

router.get("getAllUsers", authMiddleware, async (req, res) => {
  let user = await User.find();
  if (user && user.length > 0) {
    return res.json({ tag: true, message: user });
  }
  return res.json({ tag: false, message: {} });
});

router.post("/signup", async (req, res) => {
  let { email, password, username, mobile } = req.body;

  const result = await User.findOne({ email });

  if (result) {
    return res.json({ message: "User already exists", tag: false });
  } else {
    var hash = bcrypt.hashSync(password, 8);
    password = hash;
    const user = new User({
      email,
      username,
      mobile,
      password,
    });
    const userData = await user.save();
    return res.json({
      ...userData?._doc,
      message: "Successfully Created",
      tag: true,
    });
  }
});

router.post("/login", async (req, res) => {
  const obj = req.body;
  const result = await User.findOne({ email: obj.email });
  if (result) {
    bcrypt.compare(req.body.password, result.password, function (err, hashed) {
      if (hashed === true) {
        const token = jwt.sign({ id: result._id }, "secret_token");
        return res.json({ message: "Login success", token: token, tag: true });
      } else {
        return res.json({ message: "Login failed", tag: false });
      }
    });
  } else {
    return res.json({ message: "Login failed", tag: false });
  }
});

module.exports = router;

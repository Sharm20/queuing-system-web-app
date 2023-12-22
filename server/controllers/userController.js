const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "input everything" });

  try {
    const userExistsinDB = await User.findOne({ email });
    if (!userExistsinDB)
      return res.status(400).json({ error: "User not in our database" });

    const passwordMatch = await bcrypt.compare(
      password,
      userExistsinDB.password
    );

    if (!passwordMatch)
      return res.status(400).json({ error: "incorrect password" });

    const payload = { _id: userExistsinDB._id };
    const token = jwt.sign(payload, process.env.JWT_SECRETKEY, {
      expiresIn: "1h",
    });
    res.cookie("jwt", token, { expire: new Date() + 999, httpOnly: true });
    return res.status(200).json({ token, message: "Login Successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }

  //   res.send("login page");
};

const logout = (req, res) => {
  res.clearCookie("jwt");

  return res.json({ message: "Logout Successfull" });
};

const register = async (req, res) => {
  const { name, email, dob, password } = req.body;

  if (!name || !dob || !email || !password)
    return res.status(400).json({ error: "Please fill in everything" });

  try {
    const userExistence = await User.findOne({ name });

    if (userExistence)
      return res.status(400).json({ error: "user already exists" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      name,
      email,
      dob,
      password: hashedPassword,
    });

    const result = await newUser.save();

    result._doc.password = undefined;
    return res.status(201).json({ ...result._doc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
  //   res.send("register");
};

module.exports = { login, register, logout };

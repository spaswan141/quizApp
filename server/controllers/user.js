const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.newUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.send({ message: "User Alrady Exist" });
  const salt = await bcrypt.genSalt(Number(10));
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = await new User({
    ...req.body,
    password: hashPassword,
  });
  newUser.save((err, succ) => {
    if (err) {
      return res
        .status(200)
        .send({ message: "Error occurred due wrong validation" });
    } else {
      return res.status(200).send(succ);
    }
  });
};

module.exports.loginUser = async function (req, res) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send({ message: "Invalid email" });
  const token = user.generateAuthToken();
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(404).send({ message: "Invalid password" });
  return res.send({
    message: "login Successfull",
    token: token,
    name: user.name,
  });
};
module.exports.users = async function (req, res) {
    const user = await User.find();
    res.send(user);
};
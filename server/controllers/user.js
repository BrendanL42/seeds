const User = require("../models/user");

exports.createUsers = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) return res.status(403).json("User Already Exists");
  const user = await new User(req.body);
  await user.save();
  user.hashed_password = undefined;
  user.salt = undefined;
  res.status(200).json(user);
};

exports.updateUsers = async (req, res) => {
  const _id = req.body._id;
  const user = req.body;
  await User.findByIdAndUpdate({ _id: _id }, user)
    .then((_user) => {
      let user;
      user = _user;
      user.hashed_password = undefined;
      user.salt = undefined;
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log("user does not exsists");
    });
};

exports.getUser = async (req, res) => {
  await User.findById({ _id: req.query._id })
    .then((_user) => {
      let user;
      user = _user;
      user.hashed_password = undefined;
      user.salt = undefined;
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log("user does not exsists");
    });
};

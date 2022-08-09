const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    // if err or no user
    if (err || !user) {
      return res
        .status(401)
        .json("User with that email does not exist. Please sign up");
    }
    // if user is found make sure the email and password match
    // create authenticate method in model and use here
    if (!user.authenticate(password)) {
      return res.status(401).json("Email and password do not match");
    }
    // generate a token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // retrun response with user and token to frontend client
    const { _id, name, surname, email, newAccount } = user;

    return res.json({ token, newAccount, user: { _id, email, name, surname } });
  });
};

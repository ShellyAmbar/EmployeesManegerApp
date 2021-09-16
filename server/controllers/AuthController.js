const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }

    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      photoUrl: req.body.photoUrl,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass,
      organisation: req.body.organisation,
    });

    user
      .save()
      .then((user) => {
        res.json({
          message: "User added succesfully",
        });
      })
      .catch((err) => {
        res.json({
          message: "Error in adding User" + err,
        });
      });
  });
};

const login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ $or: [{ email: username }, { phone: username }] })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign(
              { name: user.email },
              process.env.ACCESS_TOKEN_SECRET,
              {
                expiresIn: "30s",
              }
            );
            let refreshToken = jwt.sign(
              { name: user.email },
              process.env.REFRESH_TOKEN_SECRET,
              {
                expiresIn: "48h",
              }
            );
            res.json({
              message: "Login Success",
              token,
              refreshToken,
            });
          } else {
            res.json({
              message: "Password does noe match",
            });
          }
        });
      } else {
        res.json({
          message: "Failed to login - user not found",
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Failed to login:" + err,
      });
    });
};

const refreshToken = (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    function (err, decode) {
      if (err) {
        res.status(400).json({
          err,
        });
      } else {
        let token = jwt.sign(
          { name: decode.name },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "60s",
          }
        );
        let refreshtoken = req.body.refreshToken;
        res.status(200).json({
          message: "token refreshed successfully.",
          token,
          refreshToken,
        });
      }
    }
  );
};
module.exports = {
  register,
  login,
  refreshToken,
};

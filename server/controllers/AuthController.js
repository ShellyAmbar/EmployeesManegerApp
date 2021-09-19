const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      console.log("bcryptErr:", err);
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
        let token = jwt.sign(
          { name: user.email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRE_TIME,
          }
        );
        let refreshToken = jwt.sign(
          { name: user.email },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRE_TIME,
          }
        );
        const userObj = {
          _id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          photoUrl: user.photoUrl,
          phone: user.phone,
          email: user.email,
          organisation: user.organisation,
        };

        return res.json({
          message: "User added succesfully",
          token,
          refreshToken,
          userObj,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({
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
                expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRE_TIME,
              }
            );
            let refreshToken = jwt.sign(
              { name: user.email },
              process.env.REFRESH_TOKEN_SECRET,
              {
                expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRE_TIME,
              }
            );
            const userObj = {
              _id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              photoUrl: user.photoUrl,
              phone: user.phone,
              email: user.email,
              organisation: user.organisation,
            };
            res.json({
              message: "Login Success",
              token,
              refreshToken,
              userObj,
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

const logout = (req, res, next) => {
  let refreshToken = req.body.refreshToken;
  let token = req.body.token;
  // jwt.destroy(refreshToken);
  // jwt.destroy(token);

  res.status(200).json({
    message: "token destroyed successfully.",
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
            expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRE_TIME,
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
  logout,
};

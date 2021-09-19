const User = require("../models/User");

const updateUser = (req, res, next) => {
  let userId = req.body.userId;
  let updateData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    photoUrl: "",
  };
  if (req.files) {
    let path = "";
    req.files.forEach(function (files, index, arr) {
      path = path + files.path + ",";
    });
    path = path.substring(0, path.lastIndexOf(","));
    updateData.photoUrl = path;
  }
  User.findByIdAndUpdate(userId, { $set: updateData })
    .then(() => {
      res.json({
        message: "Updated",
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};
const deleteUser = (req, res, next) => {
  let userId = req.body.userId;
  User.findByIdAndRemove(userId)
    .then(() => {
      res.json({
        message: "User deleted successfully.",
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};

module.exports = {
  updateUser,
  deleteUser,
};

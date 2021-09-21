const User = require("../models/User");

const updateUser = (req, res, next) => {
  let userId = req.body._id;
  let updateData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    photoUrl: req.body.photoUrl,
    organisation: req.body.organisation,
  };
  if (req.file) {
    path = req.file.path;
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

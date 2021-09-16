const Emplyee = require("../models/Employee");

const setEmployee = (req, res, next) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const photoUrl = req.body.photoUrl;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const roll = req.body.roll;
    const startDate = req.body.startDate;
    const age = req.body.age;
    const organisation = req.body.organisation;

    var employee = new Emplyee({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
      roll: roll,
      age: age,
      startDate: startDate,
      organisation: organisation,
    });

    if (req.files) {
      let path = "";
      req.files.forEach(function (files, index, arr) {
        path = path + files.path + ",";
      });
      path = path.substring(0, path.lastIndexOf(","));
      employee.photoUrl = path;
    }

    employee
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
  } catch (err) {
    console.log(err);
    res.send("employee not saved");
  }
};

const updateEmployee = (req, res, next) => {
  let employeeId = req.body.employeeId;
  let updateData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    roll: req.body.roll,
    startDate: req.body.startDate,
    age: req.body.age,
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
  Emplyee.findByIdAndUpdate(employeeId, { $set: updateData })
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
const deleteEmployee = (req, res, next) => {
  let employeeId = req.body.employeeId;
  Emplyee.findByIdAndRemove(employeeId)
    .then(() => {
      res.json({
        message: "Employee deleted successfully.",
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};
const getEmployee = (req, res, next) => {
  let employeeId = req.body.employeeId;
  Emplyee.findById(employeeId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};
const getEmployees = (req, res, next) => {
  Emplyee.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};

module.exports = {
  setEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
};

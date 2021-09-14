const Emplyee = require("../models/Employee");

const setEmployee = (req, res, next) => {
  try {
    console.log("req.body", req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const photoUrl = req.body.photoUrl;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const roll = req.body.roll;
    const startDate = req.body.startDate;
    var employee = new Emplyee({
      firstName: firstName,
      lastName: lastName,
      photoUrl: photoUrl,
      email: email,
      phone: phone,
      address: address,
      roll: roll,
      startDate: startDate,
    });

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
    res.send("employee saved");
  } catch (err) {
    console.log(err);
    res.send("employee not saved");
  }
};

const updateEmployee = (req, res, next) => {};
const deleteEmployee = (req, res, next) => {};
const getEmployee = (req, res, next) => {};
module.exports = {
  setEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};

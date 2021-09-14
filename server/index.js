const mysql = require("mysql");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var app = express();
const bodyParser = require("body-parser");

const EmployeeRoutes = require("./routes/Employee");
const AuthRoutes = require("./routes/Auth");
const UserRoutes = require("./routes/User");

app.use(bodyParser.json());
app.use(cors());
const mongoUrl =
  "mongodb+srv://shelly_ambar:metukonet101@cluster0.ys4rk.mongodb.net/EmployeesDB?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl)
  .then(() => console.log("Success mongoose"))
  .catch(() => console.log("failure mongoose"));

app.listen(3000, () => console.log("Server is running"));
app.use("/api/employee", EmployeeRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/User", UserRoutes);

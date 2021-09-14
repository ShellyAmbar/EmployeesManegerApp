const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");

router.get("/getEmployees", EmployeeController.getEmployee);
router.post("/setEmployee", EmployeeController.setEmployee);
router.put("/updateEmployee", EmployeeController.updateEmployee);
router.delete("/deleteEmployee", EmployeeController.deleteEmployee);

module.exports = router;

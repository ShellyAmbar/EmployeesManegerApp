const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.put("/updateUser", UserController.updateUser);
router.delete("/deleteUser", UserController.deleteUser);

module.exports = router;

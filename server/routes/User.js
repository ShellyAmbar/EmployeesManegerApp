const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const authentication = require("../middleware/authenticate");

router.put("/updateUser", authentication, UserController.updateUser);
router.delete("/deleteUser", authentication, UserController.deleteUser);

module.exports = router;

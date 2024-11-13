// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Định nghĩa các endpoint cho CRUD
router.post("/userValues", userController.createUserValue); // Thay đổi route thành userValues
router.get("/userValues", userController.getUserValues); // Thay đổi route thành userValues
router.put("/userValues/:id", userController.updateUserValue); // Thay đổi route thành userValues
router.delete("/userValues/:id", userController.deleteUserValue); // Thay đổi route thành userValues

module.exports = router;

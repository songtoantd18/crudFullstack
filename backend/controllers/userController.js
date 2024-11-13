// controllers/userController.js

const UserValue = require("../models/UserValue"); // Thay đổi tên Model

/**
 * Hàm tạo người dùng mới
 */
exports.createUserValue = async (req, res) => {
  try {
    const userValue = new UserValue(req.body);
    await userValue.save();
    res.status(201).json(userValue);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Hàm lấy danh sách người dùng
 */
exports.getUserValues = async (req, res) => {
  try {
    const userValues = await UserValue.find(); // Thay đổi tên Model
    res.status(200).json(userValues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Hàm cập nhật người dùng
 */
exports.updateUserValue = async (req, res) => {
  try {
    const userValue = await UserValue.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!userValue)
      return res.status(404).json({ message: "UserValue not found" });
    res.status(200).json(userValue);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Hàm xóa người dùng
 */
exports.deleteUserValue = async (req, res) => {
  try {
    const userValue = await UserValue.findByIdAndDelete(req.params.id);
    if (!userValue)
      return res.status(404).json({ message: "UserValue not found" });
    res.status(200).json({ message: "UserValue deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// src/api.js

import axios from "axios"; // Import axios

const API_URL = "http://localhost:5000/api/userValues"; // Đảm bảo endpoint chính xác

/**
 * API để lấy danh sách người dùng
 */
export const getUserValues = () => axios.get(API_URL);

/**
 * API để tạo người dùng mới
 */
export const createUserValue = (userValue) => {
  console.log("🚀 ~ userValue:", userValue);
  return axios.post(API_URL, userValue);
};
/**
 * API để cập nhật thông tin người dùng
 */
export const updateUserValue = (id, userValue) =>
  axios.put(`${API_URL}/${id}`, userValue);

/**
 * API để xóa người dùng
 */
export const deleteUserValue = (id) => axios.delete(`${API_URL}/${id}`);

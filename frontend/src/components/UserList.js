// src/components/UserList.js

import React, { useEffect, useState } from "react";
import {
  getUserValues,
  createUserValue,
  updateUserValue,
  deleteUserValue,
} from "../api"; // Thay đổi tên các hàm

function UserList() {
  const [userValues, setUserValues] = useState([]);
  const [newUserValue, setNewUserValue] = useState({ name: "", email: "" });

  useEffect(() => {
    fetchUserValues();
  }, []);

  /**
   * Hàm lấy danh sách người dùng từ server
   */
  const fetchUserValues = async () => {
    const response = await getUserValues();
    setUserValues(response.data);
  };

  /**
   * Hàm xử lý tạo người dùng mới
   */
  const handleCreateUserValue = async () => {
    await createUserValue(newUserValue);
    fetchUserValues();
    setNewUserValue({ name: "", email: "" });
  };

  /**
   * Hàm xử lý cập nhật người dùng
   */
  const handleUpdateUserValue = async (id) => {
    const updatedUserValue = userValues.find(
      (userValue) => userValue._id === id
    );
    await updateUserValue(id, updatedUserValue);
    fetchUserValues();
  };

  /**
   * Hàm xử lý xóa người dùng
   */
  const handleDeleteUserValue = async (id) => {
    await deleteUserValue(id);
    fetchUserValues();
  };

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Name"
        value={newUserValue.name}
        onChange={(e) =>
          setNewUserValue({ ...newUserValue, name: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={newUserValue.email}
        onChange={(e) =>
          setNewUserValue({ ...newUserValue, email: e.target.value })
        }
      />
      <button onClick={handleCreateUserValue}>Add User</button>
      <ul>
        {userValues.map((userValue) => (
          <li key={userValue._id}>
            {userValue.name} - {userValue.email}
            <button onClick={() => handleUpdateUserValue(userValue._id)}>
              Edit
            </button>
            <button onClick={() => handleDeleteUserValue(userValue._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

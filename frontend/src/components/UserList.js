import React, { useEffect, useState } from "react";
import { createUserValue, deleteUserValue, getUsers } from "../api";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleCreateUser = async () => {
    if (newUser.name.trim() === "" || newUser.email.trim() === "") {
      alert("Name and email cannot be empty.");
      return;
    }
    await createUserValue(newUser);
    fetchUsers();
    setNewUser({ name: "", email: "" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCreateUser();
    }
  };

  const handleDeleteUser = async (id) => {
    await deleteUserValue(id);
    fetchUsers();
  };

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        onKeyDown={handleKeyDown}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleCreateUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            <button>
              <Link to={`/edit/${user._id}`}>Edit</Link>
            </button>
            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

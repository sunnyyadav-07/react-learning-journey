import { useEffect, useState } from "react";

import "./App.css";
import api from "./axiosInstance";

function App() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  }
  const [users, setUsers] = useState([]);
  async function getData() {
    const res = await api.get("/users");
    setUsers(res.data);
  }
  async function postData() {
    if (userDetails.name === "" || userDetails.age === "") {
      alert("fill the input field!");
      return;
    }
    await api.post("/users", userDetails);
    setUserDetails({ name: "", age: "" });
    getData();
  }
  async function editData() {
    if (userDetails.name === "" || userDetails.age === "") {
      alert("fill the input field!");
      return;
    }
    await api.put(`/users/${userDetails.id}`, userDetails);
    setUserDetails({ name: "", age: "" });
    getData();
  }

  async function handleDelete(id) {
    await api.delete(`/users/${id}`);
    getData();
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex gap-2.5 mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={userDetails.name}
          className="bg-white text-black py-2 px-4"
          placeholder="enter name"
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2.5">
        <label htmlFor="age">Age</label>

        <input
          type="number"
          name="age"
          id="age"
          value={userDetails.age}
          className="bg-white text-black py-2 px-4 mb-3"
          placeholder="enter age"
          onChange={handleChange}
        />
      </div>
      {userDetails.editMode ? (
        <button onClick={editData}>save changes</button>
      ) : (
        <button onClick={postData}>post data</button>
      )}
      {users.map((user) => (
        <div key={user.id} className="bg-pink-900 px-20 py-4 my-3 rounded-md">
          <p className="text-2xl">{user.name}</p>
          <p className="text-2xl mb-3">{user.age}</p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setUserDetails({ ...user, editMode: true });
              }}
            >
              edit
            </button>
            <button onClick={() => handleDelete(user.id)}>delete</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;

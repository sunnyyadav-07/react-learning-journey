import { useState } from "react";
import "./App.css";

function App() {
  // const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [gender, setGender] = useState("");
  console.log(gender)
  const genders = ["male", "female", "others"];
  // console.log(userData);
  // function nameHandler(e) {
  //   setUserData({ ...userData, name: e.target.value });
  // }
  // function emailHandler(e) {
  //   setUserData({ ...userData, email: e.target.value });
  // }

  function handleUserData(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }
  function clearHandler(e) {
    setUserData({
      name: "",
      email: "",
    });
    setGender('')
  }
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={userData.name}
        style={{ fontSize: "1.2rem", padding: ".5rem 2rem .5rem 0.42rem" }}
        onChange={handleUserData}
      />
      <br />
      <br />
      <input
        type="text"
        name="email"
        placeholder="enter email"
        value={userData.email}
        style={{ fontSize: "1.2rem", padding: ".5rem 2rem .5rem 0.42rem" }}
        onChange={handleUserData}
      />
      <br />
      <br />
      {genders.map((item) => (
        <label key={item} htmlFor={item} style={{ fontSize: "1.5rem" }}>
          {item}
          <input
            type="radio"
            name="gender"
            id={item}
            checked={gender === item}
            value={item}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </label>
      ))}
      {/* <label htmlFor="female" style={{ fontSize: "1.5rem" }}>
        Female
        <input
          type="radio"
          name="gender"
          id="female"
          checked={gender==='female'}
          value={"female"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
      </label> */}
      <br />
      <br />
      <button onClick={clearHandler}>clear</button>
      <h1>{userData.name}</h1>
      <h1>{userData.email}</h1>
    </>
  );
}

export default App;

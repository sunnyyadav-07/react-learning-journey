import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [users, setUsers] = useState([]);
  async function getGitHubUsersData() {
    let res = await fetch("https://api.github.com/users");
    let data = await res.json();
    setUsers(data)  ;
    console.log(data);
  }
  useEffect(() => {
    getGitHubUsersData();
  }, []);
  return (
    <>
      {/* <Counter />
      <Counter /> */}
      <h1>Github Users</h1>
      <div style={{ display: "flex", flexWrap: "wrap",gap:'1rem' }}>
        {users.map((usr) => (
          <img src={usr.avatar_url} alt="" style={{width:"120px"}}/>
        ))}
      </div>
    </>
  );
}

export default App;

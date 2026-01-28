import "./App.css";
import api from "./axiosInstance";
function App() {
  async function getUsers() {
    // let res = await api.get("/posts", {
    //   params:{

    //     _limit:5,
    //     _page:2
    //   }

    // });
    // console.log(res.data);

    // const [users, posts] = await Promise.all([
    //   api.get("/users"),
    //   api.get("/posts"),
    // ]);
    // console.log(users);
    // console.log(posts);

    const results = await Promise.allSettled([
      api.get("/users"),
      api.get("/posts"),
    ]);
     const [usersResult, postsResult] = results;
     console.log(usersResult.value.data,postsResult.value.data)
  }
  localStorage.setItem("token", "Abc123@");
  getUsers();
  return <></>;
}

export default App;

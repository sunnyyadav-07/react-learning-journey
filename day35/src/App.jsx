import { useEffect, useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Parent rendered");
  });
  return (
    <>
      {/* <Child /> */}
      {/* <Child count={0}/> */}
      {/* <Child count={count}/> */}
      <Child count={{ name: "sunny" }} />
      <h1>Count in parent component : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
    </>
  );
}

export default App;

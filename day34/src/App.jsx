import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && <Form />}

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle
      </button>
    </>
  );
}

export default App;

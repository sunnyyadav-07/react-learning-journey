import React, { useState } from "react";
import { useRef } from "react";
const FirstUseCase = () => {
  // const [name, setName] = useState("");
  console.log("re-render");
  const inputRef = useRef(null);
  function handleInput() {
    inputRef.current.focus();
  }
  function handleName() {
    console.log(inputRef.current.value);
  }
  return (
    <>
      <input
        ref={inputRef}
        // value={name}
        type="text"
        // onChange={(e) => {
        //   setName(e.target.value);
        // }}
        placeholder="enter name..."
        style={{ fontSize: "2rem" }}
      />
      <br />
      <br />
      <button onClick={handleName}>submit</button>
      <br />
      <br />
      <button onClick={handleInput}>Focus the input</button>
    </>
  );
};

export default FirstUseCase;

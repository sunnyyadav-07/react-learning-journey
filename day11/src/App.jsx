import { useRef, useState } from "react";
import SingleFile from "./fileHandling/SingleFile";
import MultipleFile from "./fileHandling/MultipleFile";
import "./App.css";
function App() {
  return (
    <>
      {/* <SingleFile /> */}
      <MultipleFile />
    </>
  );
}

export default App;

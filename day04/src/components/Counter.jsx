import { useState } from "react";
import App from "../App";

const Counter = () => {
  const [count, setcount] = useState(0);
  // let count = 0;
  function handleClick() {
    // count++;
    // let h1=document.querySelector('h1');
    // h1.innerText=count
    // console.log(count);
    // let button=document.querySelector('button')
    // button.innerText = `Increment: ${count}`;
    setcount(count+1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment: {count}</button>
    </div>
  );
};

export default Counter;

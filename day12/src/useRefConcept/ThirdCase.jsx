import { useEffect, useRef, useState } from "react";
const ThirdCase = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  function handleCount() {
    setCount(count + 1);
  }
  useEffect(() => {
    countRef.current += 1;
  });
  return (
    <>
      <h2>count : {count}</h2>
      <h3>Re-render count : {countRef.current}</h3>
      <button onClick={handleCount}>Increment</button>
    </>
  );
}

export default ThirdCase

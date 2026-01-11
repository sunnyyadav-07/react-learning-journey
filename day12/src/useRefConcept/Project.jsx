import { useRef, useState } from "react";
const Project = () => {
  const [time, setTime] = useState(0);
  const intervalIdRef = useRef(null);
  function handleStart() {
    if (intervalIdRef.current !== null) {
      return;
    }
    intervalIdRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }
  function handleStop() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }
  function handleReset() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setTime(0);
  }
  return (
    <>
      <h2>Timer : {time}</h2>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

export default Project;

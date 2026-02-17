import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(0);
  function expensiveCalculation() {
    for (let i = 1; i <= 2000000000; i++) {}
  }


  // memoized value
  const expensiveCalculationResult = useMemo(() => {
    expensiveCalculation();
    return 2;
  }, []);

  // const handleClick =()=>{
  //   console.log("a function");
  // }

  // memoized function
  const handleClick = useCallback(() => {
    console.log("a function");
  }, []);
  console.log("parent rendering....");
  return (
    <>
      <h1>{expensiveCalculationResult}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        counter : {count}
      </button>
      <Child handleClick={handleClick} />
    </>
  );
}

export default App;

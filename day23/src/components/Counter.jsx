import { useCounterContaxt } from "../CounterContext";

const Counter = () => {
  const { count, setCount } = useCounterContaxt();
  return (
    <div>
      <h1>counter component : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

import { useCounter } from "../customHooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button
        onClick={() => {
          reset(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;

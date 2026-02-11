import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeByValue,
  decrement,
  increment,
} from "../store/features/counter/counterSlice";

const Counter = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  console.log(count);

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handleChangeByValue() {
    dispatch(changeByValue(value));
    setValue(0)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <br />
      <br />
      <input
        value={value}
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleChangeByValue}>change by value</button>
    </div>
  );
};

export default Counter;

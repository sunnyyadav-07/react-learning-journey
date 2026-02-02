import useGlobalStore from "../store/useGlobalStore";

const Counter = () => {
  const count = useGlobalStore((state) => state.count);
  const increment = useGlobalStore((state) => state.increment);
  const decrement = useGlobalStore((state) => state.decrement);
  const reset = useGlobalStore((state) => state.reset);
  const theme = useGlobalStore((state) => state.theme);
  return (
    <div
      className={`h-full bg-(--bg) transition-all duration-600  flex justify-center items-center`}
    >
      <div className="flex flex-col items-center gap-15">
        <p className={`text-5xl font-medium text-(--text)  `}>
          current count : {count}
        </p>
        <div className={`flex items-center font-medium  gap-3 `}>
          <button
            className="  text-3xl px-4 py-2 rounded-md active:scale-95 cursor-pointer bg-(--button-bg) text-(--button-text)"
            onClick={increment}
          >
            increment
          </button>
          <button
            className="  text-3xl px-4 py-2 rounded-md active:scale-95 cursor-pointer bg-(--button-bg) text-(--button-text)"
            onClick={decrement}
          >
            decrement
          </button>
          <button
            className="  text-3xl px-4 py-2 rounded-md active:scale-95 cursor-pointer bg-(--button-bg) text-(--button-text)"
            onClick={reset}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

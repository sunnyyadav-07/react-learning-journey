import { createContext, useContext, useState } from "react";

const counterContaxt = createContext();
function ContaxtProvider({ children }) {
  const [count, setCount] = useState(0);
  const value = {
    count,
    setCount,
  };
  return (
    <>
      <counterContaxt.Provider value={value}>
        {children}
      </counterContaxt.Provider>
    </>
  );
}

function useCounterContaxt() {
  return useContext(counterContaxt);
}
export { useCounterContaxt, ContaxtProvider };

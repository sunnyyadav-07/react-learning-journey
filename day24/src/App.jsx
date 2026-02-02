import Counter from "./components/Counter";
import Header from "./components/Header";
import { useEffect } from "react";
import useGlobalStore from "./store/useGlobalStore";
function App() {
   const theme = useGlobalStore((state) => state.theme);

   useEffect(() => {
     document.documentElement.setAttribute("data-theme", theme);
   }, [theme]);
  return (
    <>
    <div className="h-screen">

      <Header />
      <Counter />
    </div>
    </>
  );
}

export default App;

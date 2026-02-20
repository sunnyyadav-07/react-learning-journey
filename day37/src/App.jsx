import "./App.css";
import ManualVirtualization from "./components/ManualVirtualization";
import VirtuosoVirtulization from "./components/VirtuosoVirtulization";

function App() {
  const arr = Array.from({ length: 10000 }, (_, index) => index+1);
  console.log(arr);
  return (
    <>
      {/* <ManualVirtualization height={300} itemHeight={30} list={arr} /> */}
      <VirtuosoVirtulization list={arr}/> 
    </>
  );
}

export default App;

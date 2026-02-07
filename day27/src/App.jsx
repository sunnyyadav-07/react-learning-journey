import Form from "./components/Form";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import useMyStore from "./store/store";

function App() {
  const isFormOpen = useMyStore((state) => state.isFormOpen);
  return (
    <>
      {isFormOpen ? (
        <Form />
      ) : (
        <div className="bg-(--bg-color) h-screen">
          <Navbar />
          <Main />
        </div>
      )}
    </>
  );
}

export default App;

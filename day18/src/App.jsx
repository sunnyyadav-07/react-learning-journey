import { useState } from "react";
import MultiStepForm from "./components/form/MultiStepForm";
import {Toaster} from 'react-hot-toast'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex justify-center bg-blue-100 items-center">
        <Toaster/>
        <MultiStepForm />
      </div>
    </>
  );
}

export default App;

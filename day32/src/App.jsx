import "./App.css";
import AddEmployeePopUp from "./components/AddEmployeePopUp";
import DeletePopup from "./components/DeletePopup";
import EmployeesList from "./components/EmployeesList";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { getEmployees } from "./store/feature/employees/employee.thunk";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  return (
    <div className=" min-h-screen w-full">
      <AddEmployeePopUp />
      <DeletePopup />
      <Navbar />
      <EmployeesList />
    </div>
  );
}

export default App;

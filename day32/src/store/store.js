import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./feature/popup/popup.slice";
import employeeReducer from "./feature/employees/employee.slice";
export const store = configureStore({
  reducer: {
    popup: popupReducer,
    employeeDetails: employeeReducer,
  },
});

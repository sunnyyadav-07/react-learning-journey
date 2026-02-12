import { createSlice } from "@reduxjs/toolkit";
import {
  deleteEmployee,
  getEmployees,
  postEmployee,
  updateEmployee,
} from "./employee.thunk";

const initialState = {
  employees: [],
  loading: false,
  error: null,
  isShowHighligtEmployee: false,
};
const employeeSlice = createSlice({
  name: "emoployee",
  initialState,
  reducers: {
    highligt: (state) => {
      state.isShowHighligtEmployee = !state.isShowHighligtEmployee;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployees.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    });
    builder.addCase(postEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(postEmployee.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteEmployee.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateEmployee.fulfilled, (state) => {
      state.loading = false;
    });
  },
});
export default employeeSlice.reducer;
export const {highligt} = employeeSlice.actions;

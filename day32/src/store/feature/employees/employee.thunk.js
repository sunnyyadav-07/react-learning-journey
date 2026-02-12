import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";

export const getEmployees = createAsyncThunk(
  "emoployee/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/employee");
      return res.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);
export const postEmployee = createAsyncThunk(
  "emoployee/postEmployee",
  async (details, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.post("/employee", details);
      dispatch(getEmployees());
      return res.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);
export const deleteEmployee = createAsyncThunk(
  "emoployee/deleteEmployee",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await api.delete("/employee/" + id);
      dispatch(getEmployees());
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);
export const updateEmployee = createAsyncThunk(
  "emoployee/updateEmployee",
  async ({ id, details }, { rejectWithValue, dispatch }) => {
    try {
      await api.put("/employee/" + id, details);
      dispatch(getEmployees());
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);

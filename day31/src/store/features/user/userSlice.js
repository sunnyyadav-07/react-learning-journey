import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async (payload,{rejectWithValue}) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue('something went wrong!')
  }
  
});
const initialState = {
  users: [],
  loaing: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (addBuilder) => {
    addBuilder.addCase(fetchUsers.pending, (state, action) => {
      state.loaing = true;
      state.error = null;
    });
    addBuilder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loaing = true;
      state.users=action.payload
    });
    addBuilder.addCase(fetchUsers.rejected, (state, action) => {
      state.loaing = false;
      state.error=action.payload
    });
  },
});

export default userSlice.reducer;

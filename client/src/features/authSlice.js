import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    register: {},
    errors: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.register = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
  // extraReducers: (builder) => {},
});

export const { setUser, setErrors } = userSlice.actions;
export default userSlice.reducer;

export const registerRequest = (user) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3001/register", user);
    console.log(response.data);
    dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }
};

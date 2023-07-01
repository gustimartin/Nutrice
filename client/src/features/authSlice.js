import axios from "../api/axios.js";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    register: {},
    errors: [],
    login: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.register = action.payload;
    },
    setUserLogin: (state, action) => {
      state.login = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
  // extraReducers: (builder) => {},
});

export const { setUser, setErrors, setUserLogin } = userSlice.actions;
export default userSlice.reducer;

export const registerRequest = (user) => async (dispatch) => {
  try {
    const response = await axios.post("/register", user);
    console.log(response.data);
    dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }
};

export const loginRequest = (user) => async (dispatch) => {
  try {
    const response = await axios.post("/login", user);
    console.log(response.data);
    dispatch(setUserLogin(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }
};

export const verifyToken = () => {
  axios.get("/verify");
};

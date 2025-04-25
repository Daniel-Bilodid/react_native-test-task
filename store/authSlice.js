import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  pinSet: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setPin: (state, action) => {
      state.pinSet = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
      state.pinSet = false;
    },
  },
});

export const { setCredentials, setPin, clearAuth } = authSlice.actions;
export default authSlice.reducer;

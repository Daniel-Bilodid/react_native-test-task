import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  pinSet: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    },
    setPin: (state) => {
      state.pinSet = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.pinSet = false;
    },
  },
});

export const { setCredentials, setPin, logout } = authSlice.actions;
export default authSlice.reducer;

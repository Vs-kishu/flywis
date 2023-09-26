import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  phone: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.isLoggedIn = true;
    },
    LogOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { Login } = userSlice.actions;
export default userSlice.reducer;

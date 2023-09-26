import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  phone: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

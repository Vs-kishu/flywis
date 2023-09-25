import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice";
import quiz from "./quizSlice";
import common from "./commonSlice";

export const store = configureStore({
  reducer: {
    common,
    cart,
    quiz,
  },
});

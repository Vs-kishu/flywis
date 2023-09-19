import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice";
import quiz from "./quizSlice";

export const store = configureStore({
  reducer: {
    cart,
    quiz,
  },
});

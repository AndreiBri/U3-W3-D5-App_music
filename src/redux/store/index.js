import { configureStore } from "@reduxjs/toolkit";
import dinamicCards from "../reducers/dinamicCards";

const store = configureStore({
  reducer: {
    deezer: dinamicCards,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterHelpers";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

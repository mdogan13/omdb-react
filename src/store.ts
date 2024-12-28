import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import mediaSlice from "./features/media/mediaSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    media: mediaSlice,
  },
});

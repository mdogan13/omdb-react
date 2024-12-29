import { configureStore } from "@reduxjs/toolkit";
import mediaSlice from "./features/media/mediaSlice";

export default configureStore({
  reducer: {
    media: mediaSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./slices/music-slice";

const store = configureStore({
  reducer: {
    music: musicSlice.reducer,
    // Add other slices here if needed
  },
});

export default store;

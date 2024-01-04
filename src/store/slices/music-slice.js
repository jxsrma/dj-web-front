import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicList: {},
  youtube : ""
};

const musicSlice = createSlice({
    name: "music",
    initialState: initialState,
    reducers: {
      setMusicList(state, action) {
        state.musicList = action.payload;
      },
      setYoutube(state, action) {
        state.youtube = action.payload;
      },
    },
  });
  
export const musicActions = musicSlice.actions;
export default musicSlice;

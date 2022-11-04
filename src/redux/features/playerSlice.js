import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i
      state.isActive = true;
    },

    nextSong: (state, action) => {
      state.currentIndex = action.payload;
      if (state.currentSongs[action.payload]?.track && state.currentSongs[action.payload]?.track.hasOwnProperty('images') && state.currentSongs[action.payload]?.track.hub.hasOwnProperty('actions')) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else if (state.currentSongs[action.payload]?.hub.hasOwnProperty('actions') && state.currentSongs[action.payload]?.hasOwnProperty('images')) {
        state.activeSong = state.currentSongs[action.payload];
      } else {
        state.activeSong = state.currentSongs[action.payload + 1];

        state.currentIndex = action.payload + 1;
      }
      state.isActive = true;

    },

    prevSong: (state, action) => {
      state.currentIndex = action.payload;
      if (state.currentSongs[action.payload]?.track && state.currentSongs[action.payload]?.track.hasOwnProperty('images') && state.currentSongs[action.payload]?.track.hub.hasOwnProperty('actions')) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else if (state.currentSongs[action.payload]?.hub.hasOwnProperty('actions') && state.currentSongs[action.payload]?.hasOwnProperty('images')) {
        state.activeSong = state.currentSongs[action.payload];
      } else {
        state.activeSong = state.currentSongs[action.payload - 1];

        state.currentIndex = action.payload - 1;
      }
      state.isActive = true;

    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    }
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;



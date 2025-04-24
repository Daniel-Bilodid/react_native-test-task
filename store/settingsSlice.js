import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en", // default language 'en' or 'ar'
  profile: {
    name: "",
    photo: null,
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload; // payload: 'en' | 'ar'
    },
    setProfile: (state, action) => {
      const { name, photo } = action.payload;
      state.profile.name = name;
      state.profile.photo = photo;
    },
    clearSettings: (state) => {
      state.language = initialState.language;
      state.profile = { ...initialState.profile };
    },
  },
});

export const { setLanguage, setProfile, clearSettings } = settingsSlice.actions;
export default settingsSlice.reducer;

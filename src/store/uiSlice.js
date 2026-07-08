import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    language: 'en',
    darkMode: false,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

export const { setLanguage, toggleDarkMode } = uiSlice.actions
export default uiSlice.reducer
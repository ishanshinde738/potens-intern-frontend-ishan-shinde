import { configureStore } from '@reduxjs/toolkit'
import actionsReducer from './actionsSlice'
import uiReducer from './uiSlice'

export const store = configureStore({
  reducer: {
    actions: actionsReducer,
    ui: uiReducer,
  },
})
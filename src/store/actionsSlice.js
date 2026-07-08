import { createSlice } from '@reduxjs/toolkit'
import { mockActions } from '../data/mockActions'

const actionsSlice = createSlice({
  name: 'actions',
  initialState: mockActions,
  reducers: {
    approveAction: (state, action) => {
      const item = state.find((a) => a.id === action.payload)
      if (item) item.status = 'approved'
    },
    holdAction: (state, action) => {
      const item = state.find((a) => a.id === action.payload)
      if (item) item.status = 'held'
    },
  },
})

export const { approveAction, holdAction } = actionsSlice.actions
export default actionsSlice.reducer
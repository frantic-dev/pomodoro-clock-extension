import { createSlice } from "@reduxjs/toolkit"

const initialState = 'clock'

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    modeChange(state, action) {
      return action.payload
    }
  }
})

export const {modeChange} = modeSlice.actions

export default modeSlice.reducer
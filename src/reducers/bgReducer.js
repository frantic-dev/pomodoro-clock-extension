import { createSlice } from "@reduxjs/toolkit"

const initialState = 'option-1'

const bgSlice = createSlice({
  name: 'bg',
  initialState,
  reducers: {
    bgChange(state, action){
      return action.payload
    }
  }
})

export const {bgChange} = bgSlice.actions

export default bgSlice.reducer
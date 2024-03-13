import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  display: 'none',
  option: 'option-1'
}

const bgSlice = createSlice({
  name: 'bg',
  initialState,
  reducers: {
    bgChange(state, action){
      return {...state, ...action.payload}
    }
  }
})

export const {bgChange} = bgSlice.actions

export default bgSlice.reducer
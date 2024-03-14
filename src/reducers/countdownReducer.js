import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 5
}

const countdownSlice = createSlice({
  name: 'countdown',
  initialState,
  reducers: {
    countdownChange(state, action){
      return {...state, ...action.payload}
    }
  }
})

export const {countdownChange} = countdownSlice.actions

export default countdownSlice.reducer
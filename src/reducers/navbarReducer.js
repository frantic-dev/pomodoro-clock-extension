import { createSlice } from "@reduxjs/toolkit"

const initialState = false

const navbarSlice = createSlice({
  name: 'navbar', 
  initialState,
  reducers: {
    navbarChange(state, action) {
      return action.payload
    }
  }
})

export const {navbarChange} = navbarSlice.actions

export default navbarSlice.reducer
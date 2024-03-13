import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./reducers/navbarReducer";
import bgReducer from "./reducers/bgReducer";

const store = configureStore({
  reducer: {
    navbar: navbarReducer, 
    bg: bgReducer
  }
})

export default store
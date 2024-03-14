import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./reducers/navbarReducer";
import bgReducer from "./reducers/bgReducer";
import modeReducer from "./reducers/modeReducer";

const store = configureStore({
  reducer: {
    navbar: navbarReducer, 
    bg: bgReducer,
    mode: modeReducer,
  }
})

export default store
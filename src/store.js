import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./reducers/navbarReducer";
import bgReducer from "./reducers/bgReducer";
import modeReducer from "./reducers/modeReducer";
import countdownReducer from "./reducers/countdownReducer";

const store = configureStore({
  reducer: {
    navbar: navbarReducer, 
    bg: bgReducer,
    mode: modeReducer,
    countdown: countdownReducer,
  }
})

export default store
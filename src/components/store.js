import { ConfigStore } from "";
import { configureStore } from "@reduxjs/toolkit";
import modeReducer
export const store=configureStore({
    reducer:modeReducer
})
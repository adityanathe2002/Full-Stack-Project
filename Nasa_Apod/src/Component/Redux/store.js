import { configureStore } from "@reduxjs/toolkit";
import nasaReducer from "./nasaSlice"; // Importing nasaSlice.reducer correctly

export const store = configureStore({
    reducer: {
        nasa: nasaReducer
    }
});

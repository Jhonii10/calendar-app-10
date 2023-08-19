import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlice";
import { calerndarSlice } from "./calendar/calendarSlice";


export const store = configureStore({
    reducer:{
        ui:uiSlice.reducer,
        calendar:calerndarSlice.reducer
    }
})
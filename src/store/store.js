import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlice";
import { calerndarSlice } from "./calendar/calendarSlice";
import { authSlice } from "./auth/authSlice";


export const store = configureStore({
    reducer:{
        ui:uiSlice.reducer,
        calendar:calerndarSlice.reducer,
        auth:authSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })
    })
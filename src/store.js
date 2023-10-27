import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./components/Slice";

export const store = configureStore({
    reducer: todoslice
})
import {configureStore} from "@reduxjs/toolkit";
import sizeReducer from "../features/sizeSlice"
import cartReducer from "../features/cartSlice"
// import {apiSlice} from "../features/apiSlice";

export const store = configureStore({
    reducer: {
        size: sizeReducer,
        cart: cartReducer,
        // [apiSlice.reducerPath]: apiSlice.reducer
    },
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware().concat(apiSlice.middleware)
    // }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
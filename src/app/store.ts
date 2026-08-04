import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/MovieSlice";
import favoritesReducer from "../features/favorites/favorites";
import  bookingReducer  from "../features/booking/booking";

export const store = configureStore({
    reducer: {
        moviesReducer,
        favoritesReducer,
        bookingReducer,
    }
});


// Тип всего store
export type RootState = ReturnType<typeof store.getState>;


// Тип dispatch
export type AppDispatch = typeof store.dispatch;
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "../../types/types";

interface Favorites {
    favorites: Movie[]
}

const initialState: Favorites = {
    favorites: []
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorites(state, action: PayloadAction<Movie>){
            state.favorites.push(action.payload);
        },
        removeFavorites(state, action: PayloadAction<number>){
          state.favorites =  state.favorites.filter((el) => el.id !== action.payload)
        },
        showAll(state, action: PayloadAction<Movie[]>){
            state.favorites = action.payload
        },
        deleteAll(state, action: PayloadAction){
            state.favorites = []
        }
    }
})

export const {addFavorites, removeFavorites, showAll, deleteAll} = favoritesSlice.actions
export default favoritesSlice.reducer
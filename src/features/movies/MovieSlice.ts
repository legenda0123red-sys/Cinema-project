import { createSlice } from "@reduxjs/toolkit";
import type { Movie } from "../../types/types";
import type { PayloadAction } from "@reduxjs/toolkit";
interface MovieState {
    movies: Movie[]
}


const initialState: MovieState = {
    movies: []
}

export const moviesSlice  = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies(state, action: PayloadAction<Movie[]>){
            state.movies = action.payload
        }
    }
})

export const {setMovies} = moviesSlice.actions;
export default moviesSlice.reducer
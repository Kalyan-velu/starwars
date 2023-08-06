// src/store/reducer.ts
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { MovieState, MovieTypes } from "../../types/types";
import { setMovies } from "../actions";

const initialState: MovieState = {
  movies: [],
};

export const movieReducer = createReducer(initialState, (builder) => {
  builder.addCase(setMovies, (state, action: PayloadAction<MovieTypes[]>) => {
    state.movies = action.payload;
  });
});

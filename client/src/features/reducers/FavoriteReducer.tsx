import { createReducer } from "@reduxjs/toolkit";
import { addFav } from "../actions";
import { FavoriteState, MovieTypes } from "../../types/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FavoriteState = {
  favorite: [],
};

export const favoriteReducer = createReducer(initialState, (builder) => {
  builder.addCase(addFav, (state, action: PayloadAction<MovieTypes[]>) => {
    const newFavoriteMovie = action.payload;

    const existingMovies = state.favorite;

    const updatedFavoriteMovies = newFavoriteMovie.filter(
      (movie) =>
        !existingMovies.some(
          (favMovie) => favMovie.episode_id === movie.episode_id
        )
    );

    state.favorite = [...existingMovies, ...updatedFavoriteMovies];
  });
});

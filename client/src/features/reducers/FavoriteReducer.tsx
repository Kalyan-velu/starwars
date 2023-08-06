import { createReducer } from "@reduxjs/toolkit";
import { addFav } from "../actions";
import { FavoriteState, MovieTypes } from "../../types/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FavoriteState = {
  favorite: [],
};

export const favoriteReducer = createReducer(initialState, (builder) => {
  builder.addCase(addFav, (state, action: PayloadAction<MovieTypes[]>) => {
    state.favorite = action.payload;
  });
});

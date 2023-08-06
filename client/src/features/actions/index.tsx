import { createAction } from "@reduxjs/toolkit";
import { MovieTypes } from "../../types/types";

// For adding movies to favorite
export const addFav = createAction<MovieTypes[]>("ADD_FAVOURITE");

// For setting movie details to movies state
export const setMovies = createAction<MovieTypes[]>("SET_MOVIES");

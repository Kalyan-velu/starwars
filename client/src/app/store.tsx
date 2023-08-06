import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "../features/reducers/FavoriteReducer";
import { movieReducer } from "../features/reducers/MovieResducer";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    movies: movieReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "../features/reducers/FavoriteReducer";
import { movieReducer } from "../features/reducers/MovieResducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);
export const store = configureStore({
  reducer: {
    favorite: persistedReducer,
    movies: movieReducer,
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './features/card'
import { favoriteReducer } from './features/favorite'

const reducer = {
    cart: cartReducer,
    favorite: favoriteReducer,
  };
  
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite : favoriteReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
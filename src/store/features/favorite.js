import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: [],
    reducers: {
        addToFav: (state, action) => {
            const itemExists = state.find((item) => item.id === action.payload.id);
            if (itemExists) {
              itemExists.quantity++;
            } else {
              state.push({ ...action.payload , quantity: 1 });
            }
          },
    removeFromFavorite: (state, action) => {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      },
    },
    },);

export const favoriteReducer = favoriteSlice.reducer;

export const { addToFav , removeFromFav } = favoriteSlice.actions;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../types";

export interface BookState {
  value: IBook[];
}

const initialState: BookState = {
  value: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    createBook: (state, action: PayloadAction<IBook>) => {
      const newBook: IBook = action.payload;
      state.value.push(newBook);
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((_, index) => index !== action.payload);
    },
    updateBook: (state, action: PayloadAction<{ index: number; updatedBook: IBook }>) => {
      const { index, updatedBook } = action.payload;
      state.value[index] = { ...state.value[index], ...updatedBook };
    },
  },
});

export const { createBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
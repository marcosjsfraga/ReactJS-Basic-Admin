import { createSlice } from "@reduxjs/toolkit";

interface Category {
  id: string;
  name: string;
  decription: null | string;
  active: boolean;
  creates_at: string;
  updated_at: string;
  deleted_at: null | string;
}

export const initialState = [
  { id: "aaa", name: "Oranges", active: true, creates_at: "", updated_at: "" },
  { id: "bbb", name: "Yellow" },
  { id: "ccc", name: "Red" },
];

const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  }
});

export default categorySlice.reducer;
// export const { createCategory, updateCategory, deleteCategory } = categorySlice.actions;

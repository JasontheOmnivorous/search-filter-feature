import { ProductSliceState } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductSliceState = {
  items: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

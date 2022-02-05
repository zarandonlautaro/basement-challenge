import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Product} from "../components/product/types";

const initialState: Product[] = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product>) => {
      const pos = state.map((i) => i.id).indexOf(action.payload.id);

      if (pos !== -1) {
        state[pos] = {...action.payload};
      } else {
        state.push({...action.payload});
      }
    },
    removeProduct: (state, action: PayloadAction<Product>) =>
      state.filter((products) => products.id !== action.payload.id),
  },
});

export const {setProducts, removeProduct} = productSlice.actions;
export default productSlice.reducer;

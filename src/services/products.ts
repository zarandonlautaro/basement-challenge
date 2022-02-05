import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Product} from "../components/product/types";

const initialState: Product[] = [{id: 0, image: "../../", price: "500", title: "hola"}];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
  },
});

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;

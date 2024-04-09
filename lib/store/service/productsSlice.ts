import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct } from '../models/Product';

export interface IProductsState {
  listProducts: IProduct[];
}

const initialState: IProductsState = {
  listProducts: [] as IProduct[],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setListProducts: (state, action: PayloadAction<IProduct>) => {
      if (
        !state.listProducts.find((product) => product.id === action.payload.id)
      ) {
        state.listProducts = [...state.listProducts, action.payload];
      }
    },
  },
});

export const { setListProducts } = productsSlice.actions;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct } from '../models/Product';

export interface IProductsState {
  listProducts: IProduct[];
  listBucket: IProduct[];
}

const initialState: IProductsState = {
  listProducts: [] as IProduct[],
  listBucket: [] as IProduct[],
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
    setListBucket: (state, action: PayloadAction<IProduct>) => {
      if (
        !state.listBucket.find((product) => product.id === action.payload.id)
      ) {
        state.listBucket = [...state.listBucket, action.payload];
      }
    },
    removeFromBucket: (state, action: PayloadAction<IProduct>) => {
      state.listBucket = state.listBucket.filter(
        (product) => product.id !== action.payload.id,
      );
    },
    clearBucket: (state) => {
      state.listBucket = [];
    },
  },
});

export const { setListProducts, setListBucket, removeFromBucket, clearBucket } =
  productsSlice.actions;

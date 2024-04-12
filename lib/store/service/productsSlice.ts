import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct, IProductOrder } from '../models/Product';

export interface IProductsState {
  listProducts: IProduct[];
  listBucket: IProduct[];
  order: IProductOrder;
}

const initialState: IProductsState = {
  listProducts: [] as IProduct[],
  listBucket: [] as IProduct[],
  order: {} as IProductOrder,
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
    setOrder: (state, action: PayloadAction<IProductOrder>) => {
      state.order = action.payload;
    },
    clearProducts: (state) => {
      state.listProducts = [] as IProduct[];
      state.listBucket = [] as IProduct[];
      state.order = {} as IProductOrder;
    },
  },
});

export const {
  setListProducts,
  setListBucket,
  removeFromBucket,
  clearBucket,
  clearProducts,
} = productsSlice.actions;

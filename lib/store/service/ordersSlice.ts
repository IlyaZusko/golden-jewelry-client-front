import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IOrder } from '../models/Orders';

export interface IOrdersState {
  listOrders: IOrder[];
}

const initialState: IOrdersState = {
  listOrders: [] as IOrder[],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setListOrders: (state, action: PayloadAction<IOrder>) => {
      if (
        !state.listOrders.find((product) => product.id === action.payload.id)
      ) {
        state.listOrders = [...state.listOrders, action.payload];
      }
    },
    clearListOrders: (state) => {
      state.listOrders = [] as IOrder[];
    },
  },
});

export const { setListOrders, clearListOrders } = ordersSlice.actions;

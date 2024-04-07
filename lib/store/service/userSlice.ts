import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IFirestoreUser } from '../models/User';

export interface IUserState {
  userData: IFirestoreUser;
}

const initialState: IUserState = {
  userData: {} as IFirestoreUser,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<IFirestoreUser>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserState } = userSlice.actions;

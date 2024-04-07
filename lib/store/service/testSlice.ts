import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
  authState: boolean;
}

const initialState: IAuthState = {
  authState: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;

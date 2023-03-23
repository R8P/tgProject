import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialState} from '../../Constants/types';

export const initialState: InitialState = {
  isLogin: false,
  loading: false,
};

export const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoginDone: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: builder => {
    builder;
  },
});

export const {setLoginDone} = reducer.actions;

export default reducer.reducer;

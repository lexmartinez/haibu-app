import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: undefined,
    fullName: '',
    email: '',
    currency: '',
    lastLogin: '',
    session: undefined,
  } as any,
  reducers: {
    setUserAuthData(state, action: PayloadAction<any>) {
      state.session = action.payload?.session;
      state.id = action.payload?.id;
      state.fullName = action.payload?.fullName;
      state.email = action.payload?.email;
      state.currency = action.payload?.currency;
    },
    setSessionAuthData(state, action: PayloadAction<any>) {
      state.session = action.payload;
    },
    clearUserAuthData(state, _: PayloadAction<any>) {
      state.session = undefined;
      state.id = undefined;
      state.fullName = '';
      state.email = '';
      state.currency = '';
      state.lastLogin = '';
    },
    setLastLogin(state, _: PayloadAction<any>) {
      state.lastLogin = new Date().toDateString();
    },
  },
});

export const {
  setUserAuthData,
  clearUserAuthData,
  setSessionAuthData,
  setLastLogin,
} = userSlice.actions;
export default userSlice.reducer;

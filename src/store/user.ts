import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currency: 'cop',
  },
  reducers: {
    setCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
  },
});

export const {setCurrency} = userSlice.actions;
export default userSlice.reducer;

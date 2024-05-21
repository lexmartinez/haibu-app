import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const pocketSlice = createSlice({
  name: 'pocket',
  initialState: {
    pockets: [] as any[],
  },
  reducers: {
    setPockets(state, action: PayloadAction<any>) {
      state.pockets = action.payload || [];
    },
  },
});

export const {setPockets} = pocketSlice.actions;
export default pocketSlice.reducer;

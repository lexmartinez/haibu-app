import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    loading: false,
  },
  reducers: {
    showLoader(state, _: PayloadAction<any>) {
      state.loading = true;
    },
    hideLoader(state, _: PayloadAction<any>) {
      state.loading = false;
    },
  },
});

export const {showLoader, hideLoader} = uiSlice.actions;
export default uiSlice.reducer;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    count: 0,
    balance: 0,
    transactions: [] as any[],
  },
  reducers: {
    setTransactionsData(state, action: PayloadAction<any>) {
      state.count = action.payload?.count;
      if (action.payload?.append) {
        state.transactions = [...state.transactions, ...action.payload?.rows];
      } else {
        state.transactions = action.payload?.rows;
      }
    },
    setBalance(state, action: PayloadAction<any>) {
      state.balance = action.payload;
    },
  },
});

export const {setTransactionsData, setBalance} = transactionSlice.actions;
export default transactionSlice.reducer;

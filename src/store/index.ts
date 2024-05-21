import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user';
import uiReducer from './ui';
import transactionReducer from './transaction';
import pocketReducer from './pocket';

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    transaction: transactionReducer,
    pocket: pocketReducer,
  },
});

export type RootState = {
  user: {
    id: string;
    fullName: string;
    email: string;
    currency: 'cop' | 'usd' | 'eur';
    lastLogin: string;
    session: {
      authToken: string;
      refreshToken: string;
    };
  };
  ui: {
    loading: boolean;
  };
  transaction: {
    count: number;
    balance: number;
    transactions: any[]; //TODO: TYPE THIS
  };
  pocket: {
    pockets: any[]; //TODO: TYPE THIS
  };
};

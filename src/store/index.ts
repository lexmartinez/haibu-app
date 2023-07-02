import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user';

//toolkit docs here : https://hybridheroes.de/blog/2021-01-08-redux-toolkit-react-native/
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = {
  user: {
    currency: string;
  };
};

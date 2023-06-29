import {configureStore} from '@reduxjs/toolkit';
import messageReducer from './message';

//toolkit docs here : https://hybridheroes.de/blog/2021-01-08-redux-toolkit-react-native/
export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export type RootState = {
  message: string;
};

import {RootState} from '..';

export const TOKEN_SELECTOR = (state: RootState) => {
  const {user = undefined} = {...state};
  return user?.session?.authToken;
};

export const REFRESH_TOKEN_SELECTOR = (state: RootState) => {
  const {user = undefined} = {...state};
  return user?.session?.refreshToken;
};

export const USER_SELECTOR = (state: RootState) => {
  const {user = undefined} = {...state};
  return user;
};

export const SHOULD_REFRESH_SELECTOR = (state: RootState) => {
  const {user = undefined} = {...state};
  const {lastLogin} = {...user};
  const today = new Date();
  if (!!lastLogin && today.toDateString() === lastLogin) {
    return true;
  }
  return false;
};

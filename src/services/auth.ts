import {useDispatch, useSelector} from 'react-redux';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {showLoader, hideLoader} from '~/store/ui';
import {
  setUserAuthData,
  setSessionAuthData,
  clearUserAuthData,
  setLastLogin,
} from '~/store/user';
import {REFRESH_TOKEN_SELECTOR} from '~/store/selectors/user';
import {storage} from '~/config/constants';
import axios from '~axios';

export const login = async (
  email: string,
  password: string,
  dispatch: Function,
  setUserStorage: Function,
) => {
  try {
    dispatch(showLoader());
    const response = await axios.post('auth/login', {
      email,
      password,
    });
    await dispatch(setUserAuthData(response?.data));
    await setUserStorage(JSON.stringify(response?.data));
    await dispatch(setLastLogin());
    return true;
  } catch (e: any) {
    console.log(e);
    return false;
  } finally {
    dispatch(hideLoader());
  }
};

export const refresh = async (
  refreshToken: string,
  dispatch: Function,
  getUserStorage: Function,
  setUserStorage: Function,
  clearUserStorage: Function,
) => {
  try {
    dispatch(showLoader());
    const response = await axios.post('auth/refresh', {
      refreshToken,
    });
    if (response?.data?.authToken) {
      await dispatch(setSessionAuthData(response?.data));
      await dispatch(setLastLogin());
      const storageData = await getUserStorage();
      if (storageData) {
        const userData = await JSON.parse(storageData);
        setUserStorage(
          JSON.stringify({...userData, session: {...response?.data}}),
        );
        return true;
      }
    } else {
      await dispatch(clearUserAuthData());
      await clearUserStorage();
      return false;
    }
  } catch (a: any) {
    console.log(a);
    await dispatch(clearUserAuthData());
    await clearUserStorage();
    return false;
  } finally {
    dispatch(hideLoader());
  }
};

export const logout = async (
  dispatch: Function,
  clearUserStorage: Function,
) => {
  try {
    dispatch(showLoader());
    await dispatch(clearUserAuthData());
    await clearUserStorage();
    return true;
  } catch (e: any) {
    console.log(e);
    return false;
  } finally {
    dispatch(hideLoader());
  }
};

export const signup = async (
  email: string,
  password: string,
  fullName: string,
  currency: string,
  dispatch: Function,
) => {
  try {
    dispatch(showLoader());
    const response = await axios.post('auth/signup', {
      email,
      password,
      fullName,
      currency,
    });
    return response?.status === 201;
  } catch (e: any) {
    console.log(e);
    return false;
  } finally {
    dispatch(hideLoader());
  }
};

const useAuthService = (): any => {
  const refreshToken: string = useSelector(REFRESH_TOKEN_SELECTOR);
  const dispatch = useDispatch();
  const {
    setItem: setUserStorage,
    removeItem: clearUserStorage,
    getItem: getUserStorage,
  } = useAsyncStorage(storage.USER);

  const _login = async (email: string, password: string) => {
    return await login(email, password, dispatch, setUserStorage);
  };

  const _logout = async () => {
    return await logout(dispatch, clearUserStorage);
  };

  const _refresh = async () => {
    return await refresh(
      refreshToken,
      dispatch,
      getUserStorage,
      setUserStorage,
      clearUserStorage,
    );
  };

  const _signup = async (
    email: string,
    password: string,
    fullName: string,
    currency: string,
  ) => {
    return await signup(email, password, fullName, currency, dispatch);
  };

  return {
    login: _login,
    signup: _signup,
    logout: _logout,
    refresh: _refresh,
  };
};

export default useAuthService;

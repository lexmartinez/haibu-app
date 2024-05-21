import {showLoader, hideLoader} from '~/store/ui';
import {useDispatch, useSelector} from 'react-redux';
import {setPockets} from '~/store/pocket';
import {TOKEN_SELECTOR} from '~/store/selectors/user';
import axios from '~axios';

export const fetchPockets = async (token: string, dispatch: Function) => {
  try {
    dispatch(showLoader());
    const response = await axios.get('/pockets?include=category', token);
    dispatch(setPockets(response.data));
  } catch (_: any) {
  } finally {
    dispatch(hideLoader());
  }
};

const usePocketService = () => {
  const token: string = useSelector(TOKEN_SELECTOR);
  const dispatch = useDispatch();

  const _fetchPockets = async () => {
    await fetchPockets(token, dispatch);
  };

  return {
    fetchPockets: _fetchPockets,
  };
};

export default usePocketService;

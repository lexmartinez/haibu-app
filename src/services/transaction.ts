import {showLoader, hideLoader} from '~/store/ui';
import {useDispatch, useSelector} from 'react-redux';
import {setTransactionsData, setBalance} from '~/store/transaction';
import {TOKEN_SELECTOR} from '~/store/selectors/user';
import axios from '~axios';

export const fetchTransactions = async (
  offset: number,
  limit: number,
  token: string,
  dispatch: Function,
) => {
  try {
    dispatch(showLoader());
    const response = await axios.get(
      `/transactions?offset=${offset}&limit=${limit}&include=category`,
      token,
    );
    dispatch(setTransactionsData({...response?.data, append: false}));
  } catch (_: any) {
  } finally {
    dispatch(hideLoader());
  }
};

export const getBalance = async (token: string, dispatch: Function) => {
  try {
    dispatch(showLoader());
    const response = await axios.get('/balance', token);
    dispatch(setBalance(response?.data?.total));
  } catch (_: any) {
  } finally {
    dispatch(hideLoader());
  }
};

const useTransactionService = () => {
  const token: string = useSelector(TOKEN_SELECTOR);
  const dispatch = useDispatch();

  const _fetchTransactions = async (offset: number, limit: number) => {
    await fetchTransactions(offset, limit, token, dispatch);
  };

  const _getBalance = async () => {
    await getBalance(token, dispatch);
  };

  return {
    fetchTransactions: _fetchTransactions,
    getBalance: _getBalance,
  };
};

export default useTransactionService;

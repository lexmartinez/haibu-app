import {RootState} from '..';

export const TRANSACTIONS_SELECTOR = (state: RootState) => {
  const {transaction = {} as any} = {...state};
  return transaction?.transactions || [];
};

export const BALANCE_SELECTOR = (state: RootState) => {
  const {transaction = {} as any} = {...state};
  return transaction?.balance || 0;
};

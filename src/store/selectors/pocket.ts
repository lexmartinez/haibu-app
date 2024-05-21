import {RootState} from '..';

export const POCKETS_SELECTOR = (state: RootState) => {
  const {pocket = {} as any} = {...state};
  return pocket.pockets || [];
};

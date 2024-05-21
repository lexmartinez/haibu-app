export const LOADING_SELECTOR = (state: any) => {
  const {ui = {}} = {...state};
  return ui.loading;
};

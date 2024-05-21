export const appName = 'Haibu';
export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const screen = {
  _HOME: '_home',
  _PROFILE: '_profile',
  _BUDGET: '_budget',
  _SAVINGS: '_savings',
  HOME: 'home',
  PROFILE: 'profile',
  CHANGE_PASSWORD: 'change_password',
  LOGIN: 'login',
  SIGNUP: 'signup',
  SAVINGS: 'savings',
  POCKET_DETAIL: 'pocket_detail',
  NEW_TRANSACTION: 'new_transaction',
  NEW_POCKET: 'new_pocket',
};

export const getPocketColors = (theme: any) => ({
    BLUE: {
      primary: theme.colors.mariner,
      secondary: theme.colors.hummingBird,
    },
    RED: {
      primary: theme.colors.mandy,
      secondary: theme.colors.cherub,
    },
    PURPLE: {
      primary: theme.colors.studio,
      secondary: theme.colors.snuff,
    },
    ORANGE: {
      primary: theme.colors.carrotOrange,
      secondary: theme.colors.citrineWhite,
    },
    TEAL: {
      primary: theme.colors.bostonBlue,
      secondary: theme.colors.aquaSpring,
    },
    GREEN: {
      primary: theme.colors.asparagus,
      secondary: theme.colors.peppermint,
    },
  }) as any;

export const storage = {
  LOCALE: '@haibu/locale',
  CURRENCY: '@haibu/currency',
  USER: '@haibu/user',
};

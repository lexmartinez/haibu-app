import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const wpx = (value: string) => {
  return `${wp(value)}px`;
};

const hpx = (value: string) => {
  return `${hp(value)}px`;
};

export {wp, hp, wpx, hpx};

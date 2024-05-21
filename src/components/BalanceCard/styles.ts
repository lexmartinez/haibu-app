import styled from 'styled-components/native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {wpx, hpx} from '~/utils/responsive';

export const BalanceCard = styled.View`
  background-color: ${({theme}) => theme.colors.emperor};
  border-radius: ${hpx('1.5%')};
  margin-vertical: ${hpx('2%')};
  height: ${hpx('17%')};
  flex-direction: column;
  justify-content: flex-end;
  padding-vertical: ${hpx('2%')};
  padding-horizontal: ${wpx('4%')};
`;

export const BalanceCardTitle = styled.Text`
  color: ${({theme}) => theme.colors.wildSand};
  font-family: ${({theme}) => theme.fonts.SEMIBOLD};
  font-size: ${hpx('1.6%')};
  margin-bottom: ${hpx('0.5%')};
  opacity: 0.5;
`;

export const BalanceCardAmount = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.BOLD};
  font-size: ${hpx('2.8%')};
  margin-bottom: ${hpx('1%')};
`;

export const BalanceCardDetails = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-vertical: ${hpx('0.65%')};
`;

export const BalanceCardSubtitle = styled.Text`
  color: ${({theme}) => theme.colors.darkSand};
  font-family: ${({theme}) => theme.fonts.SEMIBOLD};
  font-size: ${hpx('1.45%')};
`;

export const BalanceCardEyeButton = styled.TouchableOpacity`
  position: absolute;
  top: ${hpx('2%')};
  right: ${wpx('4%')};
  align-items: center;
  justify-content: center;
`;

export const BalanceAddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: ${hpx('0%')};
  right: ${wpx('0%')};
  align-items: center;
  justify-content: center;
  padding-vertical: ${hpx('2%')};
  padding-horizontal: ${wpx('5%')};
  background-color: ${({theme}) => theme.colors.saffron};
  border-top-left-radius: ${hpx('4%')};
  border-bottom-right-radius: ${hpx('1.5%')};
  padding-left: ${wpx('6%')};
  padding-top: ${hpx('3%')};
`;

export const Icon = styled(MIcon)<{color: string}>`
  font-size: ${hpx('2.4%')};
`;

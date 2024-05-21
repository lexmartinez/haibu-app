import styled from 'styled-components/native';
import {wpx, hpx} from '~/utils/responsive';

export const TransactionItem = styled.TouchableOpacity`
  flex-direction: row;
  padding-vertical: ${hpx('1.5%')};
  align-items: center;
  background-color: ${({theme}) => theme.colors.emperor};
  margin-bottom: ${hpx('0.7%')};
  overflow: hidden;
  border-radius: ${hpx('1.5%')};
  padding-horizontal: ${wpx('4%')};
  width: ${wpx('90%')};
`;

export const ItemTitle = styled.Text<{color?: string}>`
  color: ${({theme, color}) => color || theme.colors.white};
  font-family: ${({theme}) => theme.fonts.SEMIBOLD};
  font-size: ${hpx('1.6%')};
  max-width: ${wpx('50%')};
  margin-bottom: ${hpx('0.4%')};
`;

export const ItemInfo = styled.Text`
  color: ${({theme}) => theme.colors.whiteSand};
  font-family: ${({theme}) => theme.fonts.REGULAR};
  font-size: ${hpx('1.3%')};
  opacity: 0.85;
  max-width: ${wpx('40%')};
`;

export const ItemData = styled.View`
  flex-direction: column;
  margin-horizontal: ${wpx('3%')};
  flex-grow: 1;
`;

export const ItemValue = styled.View`
  flex-direction: column;
  align-items: flex-end;
  flex-grow: 1;
`;

export const ItemIconContainer = styled.View`
  height: ${hpx('4.5%')};
  width: ${hpx('4.5%')};
  border-radius: ${hpx('4.5%')};
  background-color: ${({theme}) => theme.colors.codGray};
  align-items: center;
  justify-content: center;
`;

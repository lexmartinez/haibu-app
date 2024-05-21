import styled from 'styled-components/native';
import {wpx, hpx} from '~/utils/responsive';

export const PocketCard = styled.TouchableOpacity<{
  hasPockets: boolean;
  isAddCard: boolean;
  removeMargin?: boolean;
}>`
  background-color: ${({theme}) => theme.colors.emperor};
  border-radius: ${hpx('1.5%')};
  margin-horizontal: ${({removeMargin}) => wpx(removeMargin ? '0%' : '1%')};
  height: ${hpx('17%')};
  width: ${({hasPockets}) => wpx(hasPockets ? '80%' : '90%')};
  flex-direction: column;
  justify-content: flex-start;
  padding-vertical: ${hpx('2%')};
  padding-horizontal: ${wpx('4%')};
`;

export const CardHeader = styled.View<{isAddCard: boolean}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({isAddCard}) => hpx(isAddCard ? '0.7%' : '1.2%')};
`;

export const CardCategory = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardHeaderText = styled.Text`
  color: ${({theme}) => theme.colors.whiteSand};
  opacity: 0.6;
  margin-left: ${wpx('2%')};
  font-size: ${hpx('1.3%')};
`;

export const CardPercentageView = styled.View<{background: string}>`
  background-color: ${({background}) => background};
  padding-vertical: ${hpx('0.2%')};
  padding-horizontal: ${wpx('3%')};
  border-radius: ${hpx('2%')};
  align-self: flex-end;
`;

export const CardPercentageText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.SEMIBOLD};
  font-size: ${hpx('1.4%')};
`;

export const CardTitle = styled.Text<{isAddCard: boolean}>`
  color: ${({theme}) => theme.colors.white};
  font-size: ${hpx('1.8%')};
  font-family: ${({theme}) => theme.fonts.SEMIBOLD};
`;

export const CardProgressContainer = styled.View<{background: string}>`
  height: ${hpx('2%')};
  background-color: ${({background}) => background};
  border-radius: ${hpx('2%')};
`;

export const CardProgress = styled.View<{progress: number; background: string}>`
  height: ${hpx('2%')};
  background-color: ${({background}) => background};
  border-radius: ${hpx('2%')};
  width: ${({progress}) => progress}%;
`;

export const CardAmount = styled.View`
  flex-grow: 1;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: ${hpx('0.5%')};
`;

export const CardAmountText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: ${hpx('1.4%')};
  opacity: 0.6;
`;

export const AddCardText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  opacity: 0.6;
  font-size: ${hpx('1.6%')};
  margin-top: ${hpx('0.7%')};
`;

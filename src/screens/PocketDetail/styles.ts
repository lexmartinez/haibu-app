import styled from 'styled-components/native';
import {wpx, hpx} from '~/utils/responsive';

export const ScreenContainer = styled.SafeAreaView`
  min-height: ${hpx('100%')};
  height: ${hpx('100%')};
  width: ${wpx('100%')};
  background-color: ${({theme}) => theme.colors.darkEmperor};
  flex: 1;
`;

export const TitleBar = styled.View`
  width: ${wpx('100%')};
  align-items: center;
  justify-content: center;
  margin-top: ${hpx('2%')};
`;

export const ScrollContainer = styled.ScrollView``;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const PageTitle = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.BOLD};
  font-size: ${hpx('2%')};
  text-transform: uppercase;
`;

export const BalanceContainer = styled.View`
  width: ${wpx('90%')};
`;

export const CardContainer = styled.View`
  margin-bottom: ${hpx('1%')};
`;

export const SectionContainer = styled.View`
  margin-horizontal: ${wpx('4.5%')};
  flex: 1;
`;

export const SectionTitle = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.BOLD};
  font-size: ${hpx('2.5%')};
  margin-vertical: ${hpx('1.5%')};
  text-align: center;
`;

export const SectionText = styled.Text`
  color: ${({theme}) => theme.colors.whiteSand};
  opacity: 0.6;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  font-size: ${hpx('2%')};
  margin-bottom: ${hpx('1.5%')};
  text-align: center;
`;

export const Spacer = styled.View`
  height: ${hpx('16%')};
`;

export const EmptyStateView = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-horizontal: ${wpx('10%')};
  margin-top: ${hpx('-7%')};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.emperor};
  padding-vertical: ${hpx('2%')};
  padding-horizontal: ${wpx('3%')};
  border-radius: ${wpx('2%')};
  min-width: ${wpx('35%')};
  align-items: center;
  justify-content: center;
  margin-top: ${hpx('2.5%')};
  width: ${wpx('60%')};
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.SEMIBOLD};
  font-size: ${hpx('1.85%')};
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: ${wpx('5%')};
  top: ${hpx('-1%')};
`